import PasswordVerification from "./PasswordVerification";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sendForgotPasswordOTP } from "./actions/forgotPasswordAction";
import { validateOtpOnMobile } from "./actions/passwordVerificationAction";
import "./css/ForgotPassword.css";
import countryData from "country-telephone-data";
import { useNavigate } from "react-router-dom";

// Prepare dropdown options from country data
const countryCodeList = countryData.allCountries.map((country) => ({
  value: `+${country.dialCode}`,
  label: ` +${country.dialCode}`,
}));

const ForgotPassword = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [phoneNo, setPhoneNo] = useState("");
  const [countryCode, setCountryCode] = useState("+91");
  const [showOtpInput, setShowOtpInput] = useState(false);

  //call reducer and handle states
  const validOtpSuccessMessage = useSelector(
    (state) => state.otpValidationReducer.validOtpSuccessMessage
  );

  const handlePhoneSubmit = (event) => {
    event.preventDefault();

    // phone validations
    const regex = /^[0-9]{10}$/;
    if (!regex.test(phoneNo)) {
      alert("invalid");
    }

    //combine all values for dispatch
    const verification = {
      checkValidUser: true,
      countryCode,
      phoneNo,
    };

    setLoading(true); // Set loading state to true when form is submitted
    setShowOtpInput(true);
    dispatch(sendForgotPasswordOTP(verification));
  };

  // when entered otp is collect and dispatch for api hitting
  const onOtpSubmit = (otp) => {
    dispatch(validateOtpOnMobile(phoneNo, otp, countryCode));
    console.log("Enter full otp: ", otp);
  };

  // user validate their otp then user can navigate one time
  useEffect(() => {
    if (validOtpSuccessMessage) {
      navigate("/reset-password");
    }
  });

  return (
    <div>
      {!showOtpInput ? (
        <div className="forgot-password-container">
          <div className="forgot-password-form">
            <h2>Enter Mobile Number</h2>
            <form onSubmit={handlePhoneSubmit}>
              <select
                id="countryCode"
                name="countryCode"
                value={countryCode}
                onChange={(e) => setCountryCode(e.target.value)}
              >
                {countryCodeList.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>

              <input
                type="tel"
                id="phoneNo"
                name="phoneNo"
                placeholder="Contact No"
                value={phoneNo}
                onChange={(e) => setPhoneNo(e.target.value)}
                required
              />

              <button type="submit" disabled={loading}>
                {loading ? "Sending OTP..." : "Submit"}
              </button>
            </form>
          </div>
        </div>
      ) : (
        <div>
          <h2>Verification Code</h2>
          <p>
            We sent a code to your mobile number: {countryCode} {phoneNo}
          </p>
          <p>Please enter the code below:</p>
          <PasswordVerification length={4} onOtpSubmit={onOtpSubmit} />
        </div>
      )}
    </div>
  );
};

export default ForgotPassword;
