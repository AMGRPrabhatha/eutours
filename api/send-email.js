import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  // Handle CORS preflight request
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  try {
    const data = req.body;
    
    // Configure Namecheap SMTP transporter
    // For Namecheap Private Email: mail.privateemail.com
    // For Namecheap cPanel: usually server-name.web-hosting.com or your domain name
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'mail.privateemail.com',
      port: process.env.SMTP_PORT || 465,
      secure: process.env.SMTP_SECURE === 'false' ? false : true, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    let subject = 'New Inquiry from Eutours Website';
    let htmlContent = '';

    // Check which form submitted this
    if (data.type === 'contact') {
      subject = `New Contact Message from ${data.name}`;
      htmlContent = `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone || 'N/A'}</p>
        <p><strong>Destination Inquiry:</strong> ${data.destination}</p>
        <p><strong>Message:</strong><br/>${data.message}</p>
      `;
    } else if (data.type === 'vehicle') {
      subject = `New Vehicle Booking Request from ${data.fullName}`;
      htmlContent = `
        <h2>New Vehicle Booking Request</h2>
        <p><strong>Name:</strong> ${data.fullName}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Flight Number:</strong> ${data.flightNumber || 'N/A'}</p>
        <p><strong>Pickup Date:</strong> ${data.pickupDate}</p>
        <p><strong>Pickup Time:</strong> ${data.pickupTime}</p>
        <p><strong>Passengers:</strong> ${data.adults} Adults, ${data.children || '0'} Children</p>
        <p><strong>Vehicle ID:</strong> ${data.vehicleType}</p>
        <p><strong>Pickup Location:</strong> ${data.pickupLocation}</p>
        <p><strong>Drop-off Location:</strong> ${data.dropoffLocation}</p>
        <p><strong>Special Requests:</strong><br/>${data.specialRequests || 'None'}</p>
      `;
    } else {
      return res.status(400).json({ message: 'Unknown form type' });
    }

    // Send the email
    const info = await transporter.sendMail({
      from: `"${process.env.SMTP_FROM_NAME || 'Eutours Website'}" <${process.env.SMTP_USER}>`, // sender address
      to: process.env.SMTP_TO || process.env.SMTP_USER, // receiver (can be the same as sender)
      subject: subject,
      html: htmlContent,
    });

    console.log('Message sent: %s', info.messageId);

    return res.status(200).json({ message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ message: 'Failed to send email. Please try again later.', error: error.message });
  }
}
