import React from "react";
import InboxIcon from '@mui/icons-material/Inbox'; // Importing Material-UI icon

function Order() {
  return (
    <div>
      <div className="bg-light d-flex justify-content-between py-4 px-6 border-top border-primary">
        <div className="icon-text d-flex align-items-center">
          <div className="bi me-2"> {/* Bootstrap icon classes */}
            <InboxIcon style={{marginBottom:"15px"}}/> {/* Material-UI icon */}
          </div>
          <p>No downloads available yet.</p>
        </div>
        <div className="button">
          <button
            className="btn btn-warning"
            // onClick={() => (window.location.href = "/products")}
          >
            BROWSE PRODUCTS
          </button>
        </div>
      </div>
    </div>
  );
}

export default Order;
