import { clear } from "@testing-library/user-event/dist/clear";
import { useReducer, createContext } from "react";

export const BookingListContext = createContext({
  bookingList: [],
  addBooking: () => {},
  updateBooking: () => {},
  deleteBooking: () => {},
  clearAllBookings: () => {},
});

const bookingListReducer = (currBookingList, action) => {
  let newBookingList = currBookingList;
  if ((action.type === "ADD_BOOKING")) {
    newBookingList = [action.payload , ...currBookingList]
    console.log(newBookingList)
  } else if ((action.type === "UPDATE_BOOKING")) {
    console.log("udate booking");
  }
  else if(action.type === "DELETE_BOOKING"){
    newBookingList = currBookingList.filter((item) => item.id!==action.payload.id);
  }
  else if(action.type === "CLEAR_BOOKING"){
    newBookingList = [];
    console.log('clear')
  }
  return newBookingList;
};

const BookingListProvider = ({ children }) => {
  const [bookingList, dispatchBookingList] = useReducer(bookingListReducer, []);

  const addBooking = (
    userId,
    carName,
    pickUpLocation,
    dropOffLocation,
    pickUpDateTime,
    dropOffDateTime
  ) => {
    
    // pickUpDateTime = pickUpDateTime.replace("T" , " ");
    // dropOffDateTime = dropOffDateTime.replace("T" , " ");

    dispatchBookingList({
      type : 'ADD_BOOKING',
      payload :{
        id : Date.now(),
        userId,
        carName,
        pickUpLocation,
        dropOffLocation,
        pickUpDateTime,
        dropOffDateTime,
      }
    })
  };

  const updateBooking = () => {};

  const deleteBooking = (id) => {
    console.log(id)
    dispatchBookingList({
      type : "DELETE_BOOKING",
      payload : {
        id
      }
    })
  };

  const clearAllBookings = () => {
    dispatchBookingList({
      type : "CLEAR_BOOKING",
    })
  }

  return (
    <BookingListContext.Provider
      value={{ bookingList, addBooking, updateBooking ,deleteBooking,clearAllBookings}}
    >
      {children}
    </BookingListContext.Provider>
  );
};

export default BookingListProvider;
