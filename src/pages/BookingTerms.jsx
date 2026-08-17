import { useEffect } from 'react';

const BookingTerms = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container" style={{ padding: '100px 20px', maxWidth: '900px', margin: '0 auto', color: '#333' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '20px', color: '#1a1a1a', fontWeight: 'bold' }}>EU Tours – Booking Terms & Conditions</h1>
      <p style={{ marginBottom: '15px' }}>Welcome to EU Tours, and thank you for choosing our travel services.</p>
      <p style={{ marginBottom: '15px' }}>These Booking Terms & Conditions apply to all travel arrangements offered by EU Tours, including private tours, escorted road trips, chauffeur-driven holidays, hotel reservations, transportation, sightseeing, transfers, and other travel-related services.</p>
      <p style={{ marginBottom: '15px' }}>Our goal is to provide a safe, enjoyable, flexible, and memorable travel experience. EU Tours carefully plans every tour with the comfort, interests, and satisfaction of our guests as the highest priority.</p>
      <p style={{ marginBottom: '30px' }}>By confirming a booking or making any payment, you acknowledge that you have read, understood, and accepted these EU Tours Booking Terms & Conditions together with the applicable Cancellation & Refund Policy.</p>

      <h2 style={{ fontSize: '1.5rem', marginTop: '30px', marginBottom: '15px', color: '#0ea5e9' }}>1. Booking Confirmation</h2>
      <p style={{ marginBottom: '10px' }}>A booking is confirmed once the required advance payment has been received.</p>
      <p style={{ marginBottom: '10px' }}>Upon confirmation, EU Tours secures reservations for hotels, transportation, attractions, guides, and other travel services with third-party suppliers on your behalf.</p>
      <p style={{ marginBottom: '20px' }}>Before confirmation, any quotation or itinerary remains subject to availability and may be amended where necessary.</p>

      <h2 style={{ fontSize: '1.5rem', marginTop: '30px', marginBottom: '15px', color: '#0ea5e9' }}>2. Payment Terms</h2>
      <p style={{ marginBottom: '10px' }}>An advance payment is required to secure all bookings.</p>
      <p style={{ marginBottom: '10px' }}>Unless otherwise agreed in writing, the remaining balance must be paid before the commencement of the tour or immediately upon arrival at the agreed destination.</p>
      <p style={{ marginBottom: '20px' }}>Failure to settle the outstanding balance may result in cancellation of the booking and the release of reserved services.</p>

      <h2 style={{ fontSize: '1.5rem', marginTop: '30px', marginBottom: '15px', color: '#0ea5e9' }}>3. Prices</h2>
      <p style={{ marginBottom: '10px' }}>Prices are quoted in the currency stated in the booking confirmation.</p>
      <p style={{ marginBottom: '10px' }}>The confirmed price includes only the services specifically listed in the itinerary or quotation.</p>
      <p style={{ marginBottom: '10px' }}>Unless otherwise stated, prices exclude:</p>
      <ul style={{ listStyleType: 'disc', paddingLeft: '20px', marginBottom: '15px' }}>
        <li>Airfares</li>
        <li>Visa fees</li>
        <li>Travel insurance</li>
        <li>Personal expenses</li>
        <li>Meals not specified</li>
        <li>Optional activities</li>
        <li>Laundry services</li>
        <li>Telephone charges</li>
        <li>Mini-bar expenses</li>
        <li>Tips and gratuities</li>
        <li>Local city or tourist taxes</li>
        <li>Expenses not specifically included in the confirmed itinerary</li>
      </ul>
      <p style={{ marginBottom: '20px' }}>Pricing errors may be corrected before booking confirmation.</p>

      <h2 style={{ fontSize: '1.5rem', marginTop: '30px', marginBottom: '15px', color: '#0ea5e9' }}>4. Personalized Touring & Guest Experience</h2>
      <p style={{ marginBottom: '10px' }}>Every journey is designed by EU Tours with flexibility and guest satisfaction in mind.</p>
      <p style={{ marginBottom: '10px' }}>Where practical and operationally possible, reasonable requests from guests regarding sightseeing, timing, meal stops, shopping opportunities, rest breaks, scenic routes, or additional experiences will always be considered.</p>
      <p style={{ marginBottom: '10px' }}>During the tour, adjustments may occasionally be made to improve the overall experience, avoid crowds, respond to weather conditions, accommodate guest preferences, or enhance comfort. Such adjustments may include:</p>
      <ul style={{ listStyleType: 'disc', paddingLeft: '20px', marginBottom: '15px' }}>
        <li>Changing attractions or sightseeing order</li>
        <li>Extending time at popular locations</li>
        <li>Visiting alternative destinations</li>
        <li>Adding newly available experiences</li>
        <li>Skipping locations that guests collectively prefer not to visit</li>
        <li>Selecting better dining options</li>
        <li>Choosing more scenic travel routes</li>
      </ul>
      <p style={{ marginBottom: '10px' }}>Where changes involve additional costs, guests will always be informed beforehand and approval will be obtained before any extra expense is incurred.</p>
      <p style={{ marginBottom: '10px' }}>Likewise, where a change results in lower costs, any applicable savings will be reflected fairly wherever practical.</p>
      <p style={{ marginBottom: '20px' }}>The overall objective is always to maximize the quality, comfort, and enjoyment of the tour while delivering the best possible value.</p>

      <h2 style={{ fontSize: '1.5rem', marginTop: '30px', marginBottom: '15px', color: '#0ea5e9' }}>5. Hotel Accommodation</h2>
      <p style={{ marginBottom: '10px' }}>Hotels are reserved according to the category confirmed within the itinerary.</p>
      <p style={{ marginBottom: '10px' }}>Hotel photographs shown on websites are representative only and actual rooms may differ.</p>
      <p style={{ marginBottom: '10px' }}>Hotel check-in and check-out times are controlled by each property's own policies.</p>
      <p style={{ marginBottom: '20px' }}>Every reasonable effort will be made by EU Tours to accommodate special requests; however, these cannot be guaranteed and remain subject to hotel availability.</p>

      <h2 style={{ fontSize: '1.5rem', marginTop: '30px', marginBottom: '15px', color: '#0ea5e9' }}>6. Transportation</h2>
      <p style={{ marginBottom: '10px' }}>Transportation is provided using vehicles appropriate for the group size, luggage requirements, and planned route.</p>
      <p style={{ marginBottom: '10px' }}>Vehicle type may change where operational requirements make this necessary.</p>
      <p style={{ marginBottom: '10px' }}>EU Tours drivers operate in accordance with all applicable European transport regulations relating to safety, driving hours, and mandatory rest periods.</p>
      <p style={{ marginBottom: '20px' }}>Guest safety will always take priority over maintaining a strict timetable.</p>

      <h2 style={{ fontSize: '1.5rem', marginTop: '30px', marginBottom: '15px', color: '#0ea5e9' }}>7. Flexible Itinerary Adjustments</h2>
      <p style={{ marginBottom: '10px' }}>Travel is dynamic, and flexibility often creates a better overall experience. Itineraries may occasionally be adjusted due to:</p>
      <ul style={{ listStyleType: 'disc', paddingLeft: '20px', marginBottom: '15px' }}>
        <li>Guest preferences</li>
        <li>Weather conditions</li>
        <li>Seasonal events</li>
        <li>Road closures</li>
        <li>Public holidays</li>
        <li>Local festivals</li>
        <li>Attraction availability</li>
        <li>Government regulations</li>
        <li>Safety considerations</li>
        <li>Traffic conditions</li>
        <li>Operational improvements</li>
      </ul>
      <p style={{ marginBottom: '10px' }}>Whenever practical, suitable alternatives of equal or greater value will be arranged by EU Tours.</p>
      <p style={{ marginBottom: '20px' }}>Every decision will be made with the intention of improving guests' overall travel experience.</p>

      <h2 style={{ fontSize: '1.5rem', marginTop: '30px', marginBottom: '15px', color: '#0ea5e9' }}>8. Guest Responsibilities</h2>
      <p style={{ marginBottom: '10px' }}>Guests remain responsible for:</p>
      <ul style={{ listStyleType: 'disc', paddingLeft: '20px', marginBottom: '15px' }}>
        <li>Holding valid passports</li>
        <li>Obtaining required visas</li>
        <li>Meeting immigration requirements</li>
        <li>Carrying valid travel documentation</li>
        <li>Complying with customs regulations</li>
        <li>Arriving on time for scheduled departures</li>
        <li>Maintaining appropriate travel insurance</li>
        <li>Respecting local laws and customs</li>
      </ul>
      <p style={{ marginBottom: '20px' }}>Responsibility cannot be accepted by EU Tours for losses arising from incomplete travel documentation or immigration issues.</p>

      <h2 style={{ fontSize: '1.5rem', marginTop: '30px', marginBottom: '15px', color: '#0ea5e9' }}>9. Travel Insurance</h2>
      <p style={{ marginBottom: '10px' }}>Comprehensive travel insurance is strongly recommended for every traveler. Insurance should ideally include coverage for:</p>
      <ul style={{ listStyleType: 'disc', paddingLeft: '20px', marginBottom: '15px' }}>
        <li>Medical expenses</li>
        <li>Emergency evacuation</li>
        <li>Trip cancellation</li>
        <li>Trip interruption</li>
        <li>Lost luggage</li>
        <li>Personal belongings</li>
        <li>Personal liability</li>
        <li>Travel delays</li>
      </ul>
      <p style={{ marginBottom: '20px' }}>Travel insurance provides valuable protection against unexpected events beyond anyone's control.</p>

      <h2 style={{ fontSize: '1.5rem', marginTop: '30px', marginBottom: '15px', color: '#0ea5e9' }}>10. Health & Special Requirements</h2>
      <p style={{ marginBottom: '10px' }}>Guests are encouraged to advise EU Tours of any medical conditions, allergies, mobility limitations, dietary requirements, or disabilities before travel.</p>
      <p style={{ marginBottom: '20px' }}>This enables reasonable efforts to be made to provide the most suitable arrangements and enjoyable experience possible.</p>

      <h2 style={{ fontSize: '1.5rem', marginTop: '30px', marginBottom: '15px', color: '#0ea5e9' }}>11. Guest Conduct</h2>
      <p style={{ marginBottom: '10px' }}>All guests are expected to treat fellow travelers, drivers, guides, hotel staff, restaurant employees, and members of the public with courtesy and respect.</p>
      <p style={{ marginBottom: '10px' }}>Behavior that endangers others, causes significant disruption, damages property, or breaches local laws may result in removal from the tour without compensation.</p>
      <p style={{ marginBottom: '20px' }}>Any resulting costs shall remain the responsibility of the guest concerned.</p>

      <h2 style={{ fontSize: '1.5rem', marginTop: '30px', marginBottom: '15px', color: '#0ea5e9' }}>12. Luggage</h2>
      <p style={{ marginBottom: '10px' }}>Guests remain responsible for their luggage and personal belongings throughout the journey.</p>
      <p style={{ marginBottom: '10px' }}>Vehicle luggage capacity varies according to group size and vehicle type.</p>
      <p style={{ marginBottom: '10px' }}>Valuable items should never be left unattended.</p>
      <p style={{ marginBottom: '20px' }}>Responsibility cannot be accepted by EU Tours for lost, stolen, forgotten, or damaged personal belongings.</p>

      <h2 style={{ fontSize: '1.5rem', marginTop: '30px', marginBottom: '15px', color: '#0ea5e9' }}>13. Delays</h2>
      <p style={{ marginBottom: '10px' }}>Occasional delays may arise due to circumstances beyond reasonable control, including:</p>
      <ul style={{ listStyleType: 'disc', paddingLeft: '20px', marginBottom: '15px' }}>
        <li>Traffic</li>
        <li>Severe weather</li>
        <li>Ferry schedules</li>
        <li>Border inspections</li>
        <li>Mechanical issues</li>
        <li>Road accidents</li>
        <li>Government actions</li>
        <li>Public events</li>
      </ul>
      <p style={{ marginBottom: '20px' }}>Every reasonable effort will be made by EU Tours to minimize inconvenience while maintaining guest safety.</p>

      <h2 style={{ fontSize: '1.5rem', marginTop: '30px', marginBottom: '15px', color: '#0ea5e9' }}>14. Third-Party Services</h2>
      <p style={{ marginBottom: '10px' }}>Hotels, restaurants, transport operators, attractions, museums, and other suppliers operate under their own terms and conditions.</p>
      <p style={{ marginBottom: '20px' }}>Travel services are carefully selected and coordinated by EU Tours; however, responsibility cannot be accepted for acts or omissions of independent third-party providers beyond reasonable control.</p>

      <h2 style={{ fontSize: '1.5rem', marginTop: '30px', marginBottom: '15px', color: '#0ea5e9' }}>15. Force Majeure</h2>
      <p style={{ marginBottom: '10px' }}>Neither party shall be liable for failure to perform obligations where circumstances beyond reasonable control prevent the operation of the tour. These circumstances include, but are not limited to:</p>
      <ul style={{ listStyleType: 'disc', paddingLeft: '20px', marginBottom: '15px' }}>
        <li>Natural disasters</li>
        <li>Floods</li>
        <li>Earthquakes</li>
        <li>Wildfires</li>
        <li>Severe weather</li>
        <li>Pandemics</li>
        <li>Government restrictions</li>
        <li>Border closures</li>
        <li>Political unrest</li>
        <li>Civil disturbances</li>
        <li>Acts of terrorism</li>
        <li>Transport strikes</li>
        <li>Airline disruptions</li>
        <li>Ferry cancellations</li>
        <li>Utility failures</li>
        <li>Road closures</li>
        <li>Any other unforeseen event beyond reasonable control</li>
      </ul>
      <p style={{ marginBottom: '20px' }}>Where possible, reasonable alternatives will always be explored by EU Tours to minimize disruption.</p>

      <h2 style={{ fontSize: '1.5rem', marginTop: '30px', marginBottom: '15px', color: '#0ea5e9' }}>16. Liability</h2>
      <p style={{ marginBottom: '10px' }}>Reasonable care is exercised by EU Tours in arranging all travel services.</p>
      <p style={{ marginBottom: '10px' }}>Liability is limited to the value of the travel services purchased directly, except where liability cannot legally be excluded under applicable law.</p>
      <p style={{ marginBottom: '10px' }}>Liability cannot be accepted for indirect or consequential losses including:</p>
      <ul style={{ listStyleType: 'disc', paddingLeft: '20px', marginBottom: '15px' }}>
        <li>Missed flights</li>
        <li>Missed onward connections</li>
        <li>Loss of income</li>
        <li>Business losses</li>
        <li>Personal expenses</li>
        <li>Loss of enjoyment arising from circumstances beyond reasonable control</li>
      </ul>

      <h2 style={{ fontSize: '1.5rem', marginTop: '30px', marginBottom: '15px', color: '#0ea5e9' }}>17. Photography</h2>
      <p style={{ marginBottom: '10px' }}>Photographs and videos may occasionally be taken during tours by EU Tours for promotional purposes.</p>
      <p style={{ marginBottom: '20px' }}>Guests who prefer not to appear in promotional material are kindly requested to inform the tour leader before the tour commences.</p>

      <h2 style={{ fontSize: '1.5rem', marginTop: '30px', marginBottom: '15px', color: '#0ea5e9' }}>18. Complaints</h2>
      <p style={{ marginBottom: '10px' }}>Should any concern arise during the tour, guests are encouraged to notify the tour leader or an EU Tours representative immediately.</p>
      <p style={{ marginBottom: '20px' }}>Most issues can be resolved quickly when raised during travel.</p>

      <h2 style={{ fontSize: '1.5rem', marginTop: '30px', marginBottom: '15px', color: '#0ea5e9' }}>19. Privacy</h2>
      <p style={{ marginBottom: '20px' }}>Personal information collected during the booking process will be used solely by EU Tours for arranging and operating travel services and will be processed in accordance with applicable privacy and data protection legislation.</p>

      <h2 style={{ fontSize: '1.5rem', marginTop: '30px', marginBottom: '15px', color: '#0ea5e9' }}>20. Governing Law</h2>
      <p style={{ marginBottom: '10px' }}>These Terms & Conditions shall be governed by the laws of the country in which EU Tours is legally registered.</p>
      <p style={{ marginBottom: '20px' }}>Any dispute shall be subject to the jurisdiction of the competent courts of that country, unless mandatory consumer protection legislation provides otherwise.</p>

      <h2 style={{ fontSize: '1.5rem', marginTop: '30px', marginBottom: '15px', color: '#0ea5e9' }}>21. Acceptance</h2>
      <p style={{ marginBottom: '20px' }}>By paying a booking deposit, signing a booking confirmation, or participating in any tour, guests confirm that they have read, understood, and accepted these EU Tours Booking Terms & Conditions together with the applicable Cancellation & Refund Policy.</p>

    </div>
  );
};

export default BookingTerms;
