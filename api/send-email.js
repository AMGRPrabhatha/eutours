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

    // Shared email styles
    const emailStyles = `
      <style>
        body { font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; background-color: #f4f7f6; margin: 0; padding: 0; }
        .container { max-width: 600px; margin: 20px auto; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 10px rgba(0,0,0,0.05); border: 1px solid #e1e8ed; }
        .header { background-color: #f26522; padding: 25px 20px; text-align: center; color: #ffffff; }
        .header h1 { margin: 0; font-size: 24px; font-weight: 600; letter-spacing: 0.5px; }
        .content { padding: 30px 40px; }
        .content p { font-size: 15px; line-height: 1.6; color: #4a4a4a; margin: 10px 0; }
        .details-table { width: 100%; border-collapse: collapse; margin-top: 20px; }
        .details-table th, .details-table td { padding: 12px 15px; text-align: left; border-bottom: 1px solid #f0f0f0; }
        .details-table th { width: 35%; color: #888888; font-weight: 500; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px; }
        .details-table td { color: #333333; font-weight: 500; font-size: 15px; }
        .message-box { background-color: #f9f9f9; border-left: 4px solid #f26522; padding: 15px 20px; margin-top: 20px; border-radius: 0 4px 4px 0; }
        .message-box p { margin: 0; color: #555; font-style: italic; }
        .footer { background-color: #f9f9f9; padding: 15px; text-align: center; font-size: 12px; color: #aaaaaa; border-top: 1px solid #eeeeee; }
      </style>
    `;

    let subject = 'New Inquiry from Eutours Website';
    let htmlContent = '';

    // Check which form submitted this
    if (data.type === 'contact') {
      subject = `[Contact] New Message from ${data.name}`;
      htmlContent = `
        <!DOCTYPE html>
        <html>
        <head>${emailStyles}</head>
        <body>
          <div class="container">
            <div class="header">
              <h1>New Contact Inquiry</h1>
            </div>
            <div class="content">
              <p>Hello Eutours Team,</p>
              <p>You have received a new contact form submission on your website. Here are the details:</p>
              <table class="details-table">
                <tr><th>Full Name</th><td>${data.name}</td></tr>
                <tr><th>Email Address</th><td><a href="mailto:${data.email}">${data.email}</a></td></tr>
                <tr><th>Phone Number</th><td>${data.phone || '<em>Not provided</em>'}</td></tr>
                <tr><th>Destination</th><td>${data.destination}</td></tr>
              </table>
              <div class="message-box">
                <strong>Message:</strong><br/>
                <p>${data.message}</p>
              </div>
            </div>
            <div class="footer">
              This email was sent automatically from the Eutours.eu website contact form.
            </div>
          </div>
        </body>
        </html>
      `;
    } else if (data.type === 'vehicle') {
      subject = `[Vehicle] Booking Request from ${data.fullName}`;
      htmlContent = `
        <!DOCTYPE html>
        <html>
        <head>${emailStyles}</head>
        <body>
          <div class="container">
            <div class="header" style="background-color: #2c3e50;">
              <h1>New Vehicle Booking Request</h1>
            </div>
            <div class="content">
              <p>Hello Eutours Team,</p>
              <p>You have received a new vehicle booking request on your website. Here are the details:</p>
              <table class="details-table">
                <tr><th>Full Name</th><td>${data.fullName}</td></tr>
                <tr><th>Email Address</th><td><a href="mailto:${data.email}">${data.email}</a></td></tr>
                <tr><th>Flight Number</th><td>${data.flightNumber || '<em>Not provided</em>'}</td></tr>
                <tr><th>Pickup Date</th><td>${data.pickupDate}</td></tr>
                <tr><th>Pickup Time</th><td>${data.pickupTime}</td></tr>
                <tr><th>Passengers</th><td>${data.adults} Adults, ${data.children || '0'} Children</td></tr>
                <tr><th>Vehicle ID</th><td><strong>${data.vehicleType}</strong></td></tr>
                <tr><th>Pickup Loc</th><td>${data.pickupLocation}</td></tr>
                <tr><th>Drop-off Loc</th><td>${data.dropoffLocation}</td></tr>
              </table>
              <div class="message-box" style="border-left-color: #2c3e50;">
                <strong>Special Requests:</strong><br/>
                <p>${data.specialRequests || '<em>None</em>'}</p>
              </div>
            </div>
            <div class="footer">
              This email was sent automatically from the Eutours.eu website vehicle booking form.
            </div>
          </div>
        </body>
        </html>
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
