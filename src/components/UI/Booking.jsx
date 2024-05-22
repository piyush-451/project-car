import React, { useEffect,useState } from "react";
import InboxIcon from '@mui/icons-material/Inbox'; // Importing Material-UI icon
import axios from "axios";

function Order({token}) {

  const [bookings, setBookings] = useState([]);
  const endpoint = 'http://127.0.0.1:5001/car-rental-apis/us-central1/app/api/getAllBooking';


  useEffect(() => {
    axios.get(endpoint,{
      headers: {
        Authorization: 'Bearer ' + token,
      },
    }).then((res) => {
      console.log('first --> ', res.data.responce);
      setBookings(res.data.responce);
    })
  },[]);

  return (
    <div>
      <div className="bg-light d-flex justify-content-between py-4 px-6 border-top border-primary">
        <div className="icon-text d-flex align-items-center">
          <div className="bi me-2">
            <InboxIcon style={{ marginBottom: "15px" }} />
          </div>
          <p>Bookings</p>
        </div>
        <div className="button">
          <button className="btn btn-warning">BROWSE PRODUCTS</button>
        </div>
      </div>
      {/* Conditionally render bookings */}
      {bookings.length > 0 ? (
        <div>
          {/* Loop through bookings and display details */}
          {bookings.map((booking) => (
            <div key={booking.carId}> {/* Use a unique key for each booking */}
              <h3>Car ID: {booking.carId}</h3>
              <p>End Date: {booking.endDate}</p>
              <p>Package: {booking.package}</p>
              <p>Pickup Location: {booking.pickupLocation}</p>
              <p>Return Location: {booking.returnLocation}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>No bookings available yet.</p>
      )}
    </div>
  );
}

export default Order;

