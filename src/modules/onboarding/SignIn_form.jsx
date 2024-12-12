import "./css/SignIn_form.css";
import LetsGetStarted from "./../../assets/images/LetsGetStarted.png";
import google_logo from "./../../assets/images/google_logo.png";
import apple_logo from "./../../assets/images/apple_logo.png";
import windows_logo from "./../../assets/images/windows_logo.png";
import phone_icon from "./../../assets/images/phone_icon.png";
import password_icon from "./../../assets/images/password_icon.png";
import PayTrackz_Logo from "./../../assets/images/PayTrackz_Logo.png";
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { userSignIn } from "./actions/signInActions";
import countryData from "country-telephone-data";

// Prepare dropdown options from country data
const countryCodeOptions = countryData.allCountries.map((country) => ({
  value: `+${country.dialCode}`,
  label: `+${country.dialCode}`,
}));

const LoginForm = ({ toggleForm }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [visibleErrors, setVisibleErrors] = useState({});

  // calling reducers and handle state in the singInReducers file
  const { isSuccessLogin, loginError } = useSelector(
    (state) => state.signInReducers
  );

  // Show error for a specific field temporarily
  const showErrorTemporarily = (fieldName) => {
    setVisibleErrors((prev) => ({ ...prev, [fieldName]: true }));
    setTimeout(() => {
      setVisibleErrors((prev) => ({ ...prev, [fieldName]: false }));
    }, 2000);
  };

  // Formik configuration
  const formik = useFormik({
    initialValues: {
      countryCode: "+91",
      phoneNo: "",
      userPassword: "",
    },
    validationSchema: Yup.object({
      countryCode: Yup.string().required("Country code is required"),
      phoneNo: Yup.string()
        .required("Phone number is required")
        .matches(/^\d{10}$/, "Phone number must be 10 digits"),
      userPassword: Yup.string()
        .required("Password is required")
        .min(8, "Password must be at least 8 characters")
        .max(15, "Password must not exceed 15 characters")
        .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
        .matches(/[a-z]/, "Password must contain at least one lowercase letter")
        .matches(/[0-9]/, "Password must contain at least one number")
        .matches(
          /[!@#$%^&*(),.?":{}|<>]/,
          "Password must contain at least one special character"
        ),
    }),
    onSubmit: (values) => {
      dispatch(
        userSignIn(values.countryCode, values.phoneNo, values.userPassword)
      );
    },
  });

  // user is valid the it will navigate
  useEffect(() => {
    if (isSuccessLogin) {
      navigate("/home");
    }
  }, [isSuccessLogin, navigate]);

  return (
    <form className="form-container" onSubmit={formik.handleSubmit}>
      <div className="log-login-container">
        <div className="log-paytrakz-logo">
          <img src={PayTrackz_Logo} alt="Paytrakz logo" />
        </div>
        <div className="log-heading">
          <img src={LetsGetStarted} alt="Let's Get Started" />
        </div>
        <div className="login-form">
          {/* Phone Number Field */}
          <div className="log-phone-container">
            <label className="log-phone-label" htmlFor="phoneNo">
              Phone No
            </label>
            <div className="log-phone-field">
              <img src={phone_icon} alt="Phone icon" />
              <select
                className="log-country-code"
                id="countryCode"
                name="countryCode"
                value={formik.values.countryCode}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              >
                {countryCodeOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              {formik.touched.countryCode && formik.errors.countryCode && (
                <div className="log-error">{formik.errors.countryCode}</div>
              )}
              <input
                type="tel"
                className="log-login-phoneNo"
                id="phoneNo"
                name="phoneNo"
                value={formik.values.phoneNo}
                onChange={formik.handleChange}
                onBlur={(e) => {
                  formik.handleBlur(e);
                  if (formik.errors.phoneNo) showErrorTemporarily("phoneNo");
                }}
              />
              {visibleErrors.phoneNo &&
                formik.touched.phoneNo &&
                formik.errors.phoneNo && (
                  <div className="log-error">{formik.errors.phoneNo}</div>
                )}
            </div>
          </div>

          {/* Password Field */}
          <div className="log-password-container">
            <label className="log-password-label" htmlFor="userPassword">
              Password
            </label>
            <div className="log-password-field">
              <img src={password_icon} alt="Password icon" />
              <input
                type="password"
                id="userPassword"
                name="userPassword"
                className="log-login-password"
                value={formik.values.userPassword}
                onChange={formik.handleChange}
                onBlur={(e) => {
                  formik.handleBlur(e);
                  if (formik.errors.userPassword)
                    showErrorTemporarily("userPassword");
                }}
              />
              {visibleErrors.userPassword &&
                formik.touched.userPassword &&
                formik.errors.userPassword && (
                  <div className="log-error">{formik.errors.userPassword}</div>
                )}
            </div>
          </div>

          {/* Keep Me Logged In */}
          <div className="log-checkBox-forgetPassword">
            <input type="checkbox" className="log-check-box" />
            <span className="log-loggedIn-text">Keep me logged in</span>
            <span className="log-forget-password">
              <Link to="/forgot-password">Forgot Password</Link>
            </span>
          </div>

          {/* Sign In/Up Buttons */}
          <div className="log-signin-signup">
            <button type="submit" className="log-sign-in">
              Sign In
            </button>
            <button type="button" className="log-sign-up" onClick={toggleForm}>
              Sign Up
            </button>
          </div>

          <span className="log-or">Or</span>
          <div className="log-sign-in-with">
            <img src={google_logo} alt="Google logo" />
            <img src={apple_logo} alt="Apple logo" />
            <img src={windows_logo} alt="Windows logo" />
          </div>
          <footer>
            By proceeding, you agree to our
            <a href="#"> Terms of Use</a> and
            <a href="#"> Privacy Policy</a>.
          </footer>
        </div>
      </div>
    </form>
  );
};

export default LoginForm;
