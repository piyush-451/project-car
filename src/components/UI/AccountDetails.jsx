import React, { useState } from "react";
import { FaEye, FaEyeSlash } from 'react-icons/fa';

function AccountDetails() {
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmNewPassword, setShowConfirmNewPassword] = useState(false);

  const toggleCurrentPasswordVisibility = () => {
    setShowCurrentPassword(!showCurrentPassword);
  };

  const toggleNewPasswordVisibility = () => {
    setShowNewPassword(!showNewPassword);
  };

  const toggleConfirmNewPasswordVisibility = () => {
    setShowConfirmNewPassword(!showConfirmNewPassword);
  };

  return (
    <div className="account-details-container">
      <div className="bg-gray-100 p-4 rounded-md">
        <div className="row">
          <div className="col-md-6">
            <label htmlFor="firstName" className="block font-semibold text-gray-700">
              First name <span className="text-red">*</span>
            </label>
            <input
              type="text"
              id="firstName"
              className="form-control"
              placeholder="Enter your first name"
              required
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="lastName" className="block font-semibold text-gray-700">
              Last name <span className="text-red">*</span>
            </label>
            <input
              type="text"
              id="lastName"
              className="form-control"
              placeholder="Enter your last name"
              required
            />
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="displayName" className="block font-semibold text-gray-700">
            Display name<span className="text-red">*</span>
          </label>
          <input
            type="text"
            id="displayName"
            className="form-control"
            placeholder="Enter your display name"
            required
          />
          <p className="text-gray-500 text-sm mt-1">
            This will be how your name will be displayed in the account section and in reviews
          </p>
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block font-semibold text-gray-700">
            Email address <span className="text-red">*</span>
          </label>
          <input
            type="email"
            id="email"
            className="form-control"
            placeholder="Enter your email address"
            defaultValue="abb@gmail.com"
            required
          />
        </div>
        <div className="mb-4">
          <h2 className="font-semibold text-gray-700 mb-2">Password change</h2>
          <div className="password-input-group">
            <input
              type={showCurrentPassword ? "text" : "password"}
              id="currentPassword"
              className="form-control mb-2"
              placeholder="Enter current password"
            />
            <span className="toggle-password" onClick={toggleCurrentPasswordVisibility}>
              {showCurrentPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
          <div className="password-input-group">
            <input
              type={showNewPassword ? "text" : "password"}
              id="newPassword"
              className="form-control mb-2"
              placeholder="Enter new password"
            />
            <span className="toggle-password" onClick={toggleNewPasswordVisibility}>
              {showNewPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
          <div className="password-input-group">
            <input
              type={showConfirmNewPassword ? "text" : "password"}
              id="confirmNewPassword"
              className="form-control mb-2"
              placeholder="Confirm new password"
            />
            <span className="toggle-password" onClick={toggleConfirmNewPasswordVisibility}>
              {showConfirmNewPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
        </div>
        <button className="btn btn-primary" type="submit">
          SAVE CHANGES
        </button>
      </div>
    </div>
  );
}

export default AccountDetails;
