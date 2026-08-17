import { useEffect } from 'react';

const CancellationPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container" style={{ padding: '100px 20px', maxWidth: '900px', margin: '0 auto', color: '#333' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '20px', color: '#1a1a1a', fontWeight: 'bold' }}>EU Tours – Cancellation & Refund Policy</h1>
      <p style={{ marginBottom: '15px' }}>At EU Tours, we aim to deliver exceptional travel experiences while maintaining flexibility, transparency, and fairness for every guest.</p>
      <p style={{ marginBottom: '15px' }}>As each journey is carefully planned and many travel services are reserved well in advance, this Cancellation & Refund Policy explains how EU Tours manages cancellations, amendments, refunds, and itinerary changes. We will always do our best to accommodate guests' needs whenever possible.</p>

      <h2 style={{ fontSize: '1.5rem', marginTop: '30px', marginBottom: '15px', color: '#0ea5e9' }}>1. Booking Confirmation</h2>
      <p style={{ marginBottom: '10px' }}>A booking is confirmed once the required advance payment has been received.</p>
      <p style={{ marginBottom: '10px' }}>Following confirmation, hotels, transportation, sightseeing services, attractions, guides, and other travel arrangements are reserved by EU Tours with third-party suppliers.</p>
      <p style={{ marginBottom: '20px' }}>The remaining balance shall be paid before the commencement of the tour or upon arrival at the agreed destination.</p>

      <h2 style={{ fontSize: '1.5rem', marginTop: '30px', marginBottom: '15px', color: '#0ea5e9' }}>2. Advance Payment</h2>
      <p style={{ marginBottom: '10px' }}>The advance payment secures your reservation and allows travel arrangements to begin immediately.</p>
      <p style={{ marginBottom: '20px' }}>A portion or all of the advance payment may be used by EU Tours to secure hotels, transportation, attractions, guides, and other services with third-party suppliers.</p>

      <h2 style={{ fontSize: '1.5rem', marginTop: '30px', marginBottom: '15px', color: '#0ea5e9' }}>3. Guest Cancellations</h2>
      <p style={{ marginBottom: '10px' }}>Cancellation requests must be submitted in writing using the official communication channel used during the booking process.</p>
      <p style={{ marginBottom: '10px' }}>The effective cancellation date will be the date on which the written request is received.</p>
      <p style={{ marginBottom: '10px' }}>Where possible, every reasonable effort will be made by EU Tours to minimize cancellation costs by negotiating with suppliers and recovering refundable amounts on the guest's behalf.</p>
      <p style={{ marginBottom: '20px' }}>Refunds, where applicable, will be calculated after deducting non-recoverable supplier charges, confirmed bookings, and reasonable administrative costs.</p>

      <h3 style={{ fontSize: '1.25rem', marginTop: '20px', marginBottom: '10px', fontWeight: 'bold' }}>Standard Cancellation Guidelines</h3>
      
      <h4 style={{ fontSize: '1.1rem', marginTop: '15px', marginBottom: '10px', fontWeight: '600' }}>More than 30 days before departure</h4>
      <ul style={{ listStyleType: 'disc', paddingLeft: '20px', marginBottom: '15px' }}>
        <li>Any recoverable payments received from suppliers will be refunded.</li>
        <li>Only actual non-refundable supplier costs and reasonable administrative expenses will be deducted.</li>
      </ul>

      <h4 style={{ fontSize: '1.1rem', marginTop: '15px', marginBottom: '10px', fontWeight: '600' }}>15–30 days before departure</h4>
      <ul style={{ listStyleType: 'disc', paddingLeft: '20px', marginBottom: '15px' }}>
        <li>A partial refund will normally be available.</li>
        <li>Refunds will depend on the supplier's cancellation policies and on services already confirmed.</li>
      </ul>

      <h4 style={{ fontSize: '1.1rem', marginTop: '15px', marginBottom: '10px', fontWeight: '600' }}>8–14 days before departure</h4>
      <ul style={{ listStyleType: 'disc', paddingLeft: '20px', marginBottom: '15px' }}>
        <li>A significant portion of travel services is usually non-refundable at this stage.</li>
        <li>Any available supplier refunds will be passed on to the guest after they are received.</li>
      </ul>

      <h4 style={{ fontSize: '1.1rem', marginTop: '15px', marginBottom: '10px', fontWeight: '600' }}>Within 7 days of departure</h4>
      <ul style={{ listStyleType: 'disc', paddingLeft: '20px', marginBottom: '15px' }}>
        <li>Most travel services will have been fully confirmed and paid.</li>
        <li>Refunds will depend entirely on recoveries from hotels, transport operators, and other suppliers.</li>
      </ul>

      <h4 style={{ fontSize: '1.1rem', marginTop: '15px', marginBottom: '10px', fontWeight: '600' }}>No-Show</h4>
      <ul style={{ listStyleType: 'disc', paddingLeft: '20px', marginBottom: '20px' }}>
        <li>Guests who fail to arrive without prior notice will normally forfeit the booking, as services will already have been arranged and committed.</li>
      </ul>

      <h2 style={{ fontSize: '1.5rem', marginTop: '30px', marginBottom: '15px', color: '#0ea5e9' }}>4. Guest-Requested Changes & Flexible Travel Arrangements</h2>
      <p style={{ marginBottom: '10px' }}>We understand that travel plans may change, and EU Tours aims to be as flexible as reasonably possible.</p>
      <p style={{ marginBottom: '10px' }}>Whenever operationally feasible, requests to change travel dates, accommodation, sightseeing, destinations, routes, meal stops, or other tour arrangements will be carefully considered.</p>
      <p style={{ marginBottom: '10px' }}>Our priority is always to create the best possible travel experience for our guests. Depending on availability and supplier policies, requested changes may result in:</p>
      <ul style={{ listStyleType: 'disc', paddingLeft: '20px', marginBottom: '15px' }}>
        <li>Additional costs where upgraded services or higher-priced alternatives are selected.</li>
        <li>Reduced costs where less expensive alternatives are chosen, with applicable savings passed on where practical.</li>
        <li>No additional cost where equivalent alternatives are available.</li>
      </ul>
      <p style={{ marginBottom: '10px' }}>Where significant changes are requested after reservations have been confirmed, any charges imposed by hotels, transport providers, attractions, or other suppliers will be payable by the guest.</p>
      <p style={{ marginBottom: '20px' }}>No changes involving additional costs will be confirmed without the guest's approval.</p>

      <h2 style={{ fontSize: '1.5rem', marginTop: '30px', marginBottom: '15px', color: '#0ea5e9' }}>5. Personalized Touring & Guest Satisfaction</h2>
      <p style={{ marginBottom: '10px' }}>Every tour is designed by EU Tours around the comfort, enjoyment, and interests of our guests.</p>
      <p style={{ marginBottom: '10px' }}>During the journey, adjustments may occasionally be made to improve the overall experience, including:</p>
      <ul style={{ listStyleType: 'disc', paddingLeft: '20px', marginBottom: '15px' }}>
        <li>Spending additional time at locations guests particularly enjoy.</li>
        <li>Replacing a planned stop with a more suitable or highly recommended alternative.</li>
        <li>Adjusting sightseeing order to avoid crowds or poor weather.</li>
        <li>Adding scenic stops or local experiences where time permits.</li>
        <li>Accommodating reasonable group preferences whenever practical.</li>
      </ul>
      <p style={{ marginBottom: '10px' }}>If any optional changes increase the overall cost of the tour, guests will always be informed in advance and asked for approval.</p>
      <p style={{ marginBottom: '10px' }}>Likewise, if changes reduce costs, any applicable savings will be reflected fairly wherever practical.</p>
      <p style={{ marginBottom: '20px' }}>Our objective is not simply to follow an itinerary, but to deliver the highest possible value and an enjoyable, memorable travel experience.</p>

      <h2 style={{ fontSize: '1.5rem', marginTop: '30px', marginBottom: '15px', color: '#0ea5e9' }}>6. Non-Refundable Items</h2>
      <p style={{ marginBottom: '10px' }}>Once confirmed or purchased, the following may be wholly or partially non-refundable depending on supplier policies:</p>
      <ul style={{ listStyleType: 'disc', paddingLeft: '20px', marginBottom: '15px' }}>
        <li>Hotel reservations</li>
        <li>Transportation bookings</li>
        <li>Attraction tickets</li>
        <li>Event tickets</li>
        <li>Ferry and train tickets</li>
        <li>Visa fees</li>
        <li>Travel insurance</li>
        <li>Special permits</li>
        <li>Customized travel arrangements</li>
        <li>Supplier deposits</li>
      </ul>
      <p style={{ marginBottom: '20px' }}>Any refunds received from suppliers will be passed on to the guest after receipt, less any applicable administrative or banking charges.</p>

      <h2 style={{ fontSize: '1.5rem', marginTop: '30px', marginBottom: '15px', color: '#0ea5e9' }}>7. Balance Payment</h2>
      <p style={{ marginBottom: '10px' }}>Unless otherwise agreed, the remaining balance must be paid before tour services commence. You are welcome to discuss payment arrangements directly with EU Tours.</p>
      <p style={{ marginBottom: '20px' }}>Failure to settle the outstanding balance may result in suspension or cancellation of services and the release of reserved bookings.</p>

      <h2 style={{ fontSize: '1.5rem', marginTop: '30px', marginBottom: '15px', color: '#0ea5e9' }}>8. Cancellation by the Tour Operator</h2>
      <p style={{ marginBottom: '10px' }}>Should a confirmed tour be unable to operate due to circumstances within EU Tours' reasonable control, guests will be offered one of the following:</p>
      <ul style={{ listStyleType: 'disc', paddingLeft: '20px', marginBottom: '15px' }}>
        <li>A comparable alternative itinerary.</li>
        <li>A travel credit for a future booking.</li>
        <li>A refund of all amounts paid directly to EU Tours for services that cannot be provided.</li>
      </ul>
      <p style={{ marginBottom: '20px' }}>Every reasonable effort will be made by EU Tours to minimize inconvenience and preserve the planned holiday wherever possible.</p>

      <h2 style={{ fontSize: '1.5rem', marginTop: '30px', marginBottom: '15px', color: '#0ea5e9' }}>9. Force Majeure</h2>
      <p style={{ marginBottom: '10px' }}>Neither party shall be responsible for cancellations, delays, or changes caused by events beyond reasonable control, including but not limited to:</p>
      <ul style={{ listStyleType: 'disc', paddingLeft: '20px', marginBottom: '15px' }}>
        <li>Natural disasters</li>
        <li>Severe weather</li>
        <li>Floods</li>
        <li>Earthquakes</li>
        <li>Wildfires</li>
        <li>Pandemics</li>
        <li>Government restrictions</li>
        <li>Border closures</li>
        <li>Civil unrest</li>
        <li>Political events</li>
        <li>Airline disruptions</li>
        <li>Ferry cancellations</li>
        <li>Strikes</li>
        <li>Road closures</li>
        <li>Utility failures</li>
        <li>Acts of terrorism</li>
        <li>Any other unforeseen circumstances beyond reasonable control</li>
      </ul>
      <p style={{ marginBottom: '20px' }}>Where such events occur, every reasonable effort will be made by EU Tours to assist guests in obtaining alternative arrangements or available refunds from suppliers. Any refunds remain subject to the policies of the respective suppliers.</p>

      <h2 style={{ fontSize: '1.5rem', marginTop: '30px', marginBottom: '15px', color: '#0ea5e9' }}>10. Early Departure & Unused Services</h2>
      <p style={{ marginBottom: '10px' }}>Where a guest voluntarily leaves the tour early or chooses not to use booked services, refunds cannot normally be provided for:</p>
      <ul style={{ listStyleType: 'disc', paddingLeft: '20px', marginBottom: '15px' }}>
        <li>Unused accommodation</li>
        <li>Missed sightseeing</li>
        <li>Missed meals</li>
        <li>Missed transfers</li>
        <li>Unused transport</li>
        <li>Optional services not utilized</li>
      </ul>
      <p style={{ marginBottom: '20px' }}>Exceptional circumstances will be considered by EU Tours on a case-by-case basis where supplier refunds are available.</p>

      <h2 style={{ fontSize: '1.5rem', marginTop: '30px', marginBottom: '15px', color: '#0ea5e9' }}>11. Refund Processing</h2>
      <p style={{ marginBottom: '10px' }}>Approved refunds are normally processed within 14–30 business days after:</p>
      <ul style={{ listStyleType: 'disc', paddingLeft: '20px', marginBottom: '15px' }}>
        <li>The cancellation has been confirmed.</li>
        <li>Refunds have been received from suppliers (where applicable).</li>
        <li>Final refund calculations have been completed.</li>
      </ul>
      <p style={{ marginBottom: '20px' }}>Refunds will normally be made using the original payment method unless otherwise agreed.</p>

      <h2 style={{ fontSize: '1.5rem', marginTop: '30px', marginBottom: '15px', color: '#0ea5e9' }}>12. Acceptance</h2>
      <p style={{ marginBottom: '20px' }}>By paying a booking deposit, signing a booking confirmation, or participating in a tour, guests confirm that they have read, understood, and accepted this EU Tours Cancellation & Refund Policy together with the applicable Booking Terms & Conditions.</p>

    </div>
  );
};

export default CancellationPolicy;
