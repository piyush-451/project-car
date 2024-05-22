import { useReducer, createContext } from "react";

// Create the ConfirmedOrdersContext
export const ConfirmedOrdersContext = createContext({
  confirmedOrders: ["order"],
  confirmOrder: () => {},
  clearConfirmedOrders: () => {},
});

// Reducer for confirmed orders
const confirmedOrdersReducer = (currOrders, action) => {
  switch (action.type) {
    case "CONFIRM_ORDER":
      // Combines current orders with new orders from payload
      const newOrders = [...currOrders, ...action.payload];
      console.log("Updated Orders:", newOrders); // This will log the updated orders list
      return newOrders; // Return the new orders array to update the state
    case "CLEAR_CONFIRMED_ORDERS":
      console.log("Orders cleared");
      return []; // Clear the orders
    default:
      return currOrders; // No action taken, return current state
  }
};

// Provider component for confirmed orders
const ConfirmedOrdersProvider = ({ children }) => {
  const [confirmedOrders, dispatchConfirmedOrders] = useReducer(
    confirmedOrdersReducer,
    []
  );

  // Function to confirm orders
  const confirmOrder = (orders) => {
    dispatchConfirmedOrders({ type: "CONFIRM_ORDER", payload: orders });
  };

  // Function to clear confirmed orders
  const clearConfirmedOrders = () => {
    dispatchConfirmedOrders({ type: "CLEAR_CONFIRMED_ORDERS" });
  };

  return (
    <ConfirmedOrdersContext.Provider
      value={{ confirmedOrders, confirmOrder, clearConfirmedOrders }}
    >
      {children}
    </ConfirmedOrdersContext.Provider>
  );
};

export default ConfirmedOrdersProvider;
