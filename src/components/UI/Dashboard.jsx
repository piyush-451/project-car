import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import "../../styles/dashboard.css";

import DashboardContent from "../UI/DashboardContent";
import Order from "../UI/Order";
import AccountDetails from "../UI/AccountDetails";
import Addresses from "../UI/Addresses";
import Download from "../UI/Download";
import Logout from "../UI/Logout";
import Booking from "../UI/Booking";
import BillingAddress from "./BillingAddress";

const SidebarContent = [
  "DASHBOARD",
  "ORDERS",
  "DOWNLOADS",
  "ADDRESSES",
  "ACCOUNTDETAILS",
  "BOOKINGS",
  "LOGOUT",
];

const Dashboard = ({auth,setAuth,token}) => {
  const [selectedItem, setSelectedItem] = useState(SidebarContent[0]);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  console.log(token);

  return (
    <div className="dashboard__container">
      <Row>
      <Col lg="5" md="5" sm="12">
        <Sidebar
          selectedItem={selectedItem}
          handleItemClick={handleItemClick}
        />
        </Col>
        <Col lg="7" md="7" sm="12">
        <MainContent selectedItem={selectedItem} auth={auth} setAuth={setAuth} token={token}/>
        </Col>
      </Row>
    </div>
  );
};

const Sidebar = ({ selectedItem, handleItemClick }) => {
  return (
    <nav className="sidebar__container">
      {SidebarContent.map((item, index) => (
        <SidebarItem
          key={index}
          item={item}
          isSelected={selectedItem === item}
          onItemClick={() => handleItemClick(item)}
        />
      ))}
    </nav>
  );
};

const SidebarItem = ({ item, isSelected, onItemClick }) => {
  return (
    <div
      className={` font-semibold sidebar__item`}
      style={{ color: isSelected ? "#c58d20" : "" }}
      onClick={onItemClick}
    >
      {item}
    </div>
  );
};

const MainContent = ({ selectedItem, auth,setAuth,token  }) => {
  switch (selectedItem) {
    case "DASHBOARD":
      return <DashboardContent token={token}/>;
    case "ORDERS":
      return <Order token={token}/>;
    case "DOWNLOADS":
      return <Download token={token}/>;
    case "ADDRESSES":
      return <BillingAddress token={token} parent='dashboard'/>;
    case "ACCOUNTDETAILS":
      return <AccountDetails token={token}/>;
    case "BOOKINGS":
      return <Booking token={token}/>;
    case "LOGOUT":
      return <Logout auth={auth} setAuth={setAuth} token={token}/>;
    default:
      return <div>No component selected</div>;
  }
};

export default Dashboard;
