import React from 'react';

function Addresses() {
  return (
    <div className="">
      <div className="heading">
        <p>The following addresses will be used on the checkout page by default.</p>
      </div>
      <div className="billing mt-16 px-4">
        <p className="text-xl font-weight-bold">Billing address</p>
        <p className="text-danger mt-6">Add</p>
        <p className="italic">You have not set up this type of address yet.</p>
      </div>
    </div>
  );
}

export default Addresses;
