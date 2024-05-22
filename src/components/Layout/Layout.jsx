import React, { Fragment } from "react";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Routers from "../../routers/Routers";
import BookingListProvider from "../../store/booking-list-store";
import ConfirmedOrdersProvider from "../../store/confirm-booking-store";


const Layout = () => {
  return (
    <Fragment>
    <ConfirmedOrdersProvider>
      <BookingListProvider>
        <Header />
        <div>
          <Routers />
        </div>
        <Footer />
      </BookingListProvider>
      </ConfirmedOrdersProvider>
    </Fragment>
  );
};

export default Layout;
