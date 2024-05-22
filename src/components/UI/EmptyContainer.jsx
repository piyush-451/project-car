import React from "react";
import InboxIcon from "@mui/icons-material/Inbox"; // Importing Material-UI icon
import { Link } from "react-router-dom";

const EmptyContainer = ({ parent }) => {
  return (
    <div className="bg-light d-flex justify-content-between py-4 px-6 border-top border-primary">
      <div className="icon-text d-flex align-items-center">
        <div className="bi me-2">
          {" "}
          {/* Bootstrap icon classes */}
          <InboxIcon style={{ marginBottom: "15px" }} />{" "}
          {/* Material-UI icon */}
        </div>
        <p>No {parent} has been made yet.</p>
      </div>
      <div className="button">
        <Link to="/cars">
          <button
            className="btn btn-warning"
            // onClick={() => (window.location.href = "/products")}
          >
            BROWSE PRODUCTS
          </button>
        </Link>
      </div>
    </div>
  );
};

export default EmptyContainer;
