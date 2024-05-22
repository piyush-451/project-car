import React , {useContext} from "react";
import {ConfirmedOrdersContext} from "../../store/confirm-booking-store";
import EmptyContainer from "./EmptyContainer";
import CartItem from "./CartItem";
import ConfirmedBookings from "./ConfirmedBookings";

function Order() {
  const {confirmedOrders} = useContext(ConfirmedOrdersContext);
  return (
    <div>
      {confirmedOrders.length===0 ? <EmptyContainer parent = 'order'/> : <ConfirmedBookings bookingList = {confirmedOrders}/>}
    </div>
  );
}

export default Order;
