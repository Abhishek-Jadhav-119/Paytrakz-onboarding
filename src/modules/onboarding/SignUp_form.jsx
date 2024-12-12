import "./css/SignUp_form.css";
import paytrakz_logo from "./../../assets/images/PayTrackz_Logo.png";
import create_logo from "./../../assets/images/create_account.png";
import google_logo from "./../../assets/images/google_logo.png";
import apple_logo from "./../../assets/images/apple_logo.png";
import windows_logo from "./../../assets/images/windows_logo.png";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signUpUser } from "./actions/signUpAction";
import { useState, useEffect } from "react";
import countryData from "country-telephone-data";

// Prepare dropdown options from country data
const countryCode = countryData.allCountries.map((country) => ({
  value: `+${country.dialCode}`,
  label: ` +${country.dialCode}`,
}));

const SignUp_form = ({ toggleForm }) => {
  const [visibleErrors, setVisibleErrors] = useState({});
  const { isSuccessSignUp } = useSelector((state) => state.signUpReducers);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Formik validation schema remains unchanged
  const validationSchema = Yup.object({
    firstName: Yup.string().required("First name is required"),
    lastName: Yup.string().required("Last name is required"),
    email: Yup.string()
      .matches(
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        "Invalid email address"
      )
      .required("Email is required"),
    countryCode: Yup.string().required("Country code is required"),
    phoneNo: Yup.string()
      .matches(/^\d{10}$/, "Please put correct phone number!")
      .required("Phone number is required"),
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
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("userPassword"), null], "Passwords must match")
      .required("Confirm your password"),
    gender: Yup.string().required("Gender is required"),
  });

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      countryCode: "+91",
      phoneNo: "",
      userPassword: "",
      confirmPassword: "",
      gender: "",
    },
    validationSchema,
    onSubmit: (values) => {
      dispatch(
        signUpUser(
          values.firstName,
          values.lastName,
          values.email,
          values.countryCode,
          values.phoneNo,
          values.userPassword,
          values.gender
        )
      );
    },
  });

  //if user validation is correct the it will navigate to sign in page
  useEffect(() => {
    if (isSuccessSignUp) {
      navigate("/");
    }
  }, [isSuccessSignUp, navigate]);

  //Error display perticular time
  const showErrorTemporarily = (fieldName) => {
    // Show error for a limited period
    setVisibleErrors((prev) => ({ ...prev, [fieldName]: true }));
    setTimeout(() => {
      setVisibleErrors((prev) => ({ ...prev, [fieldName]: false }));
    }, 2000); // Error visible for 2 seconds
  };

  return (
    <>
      {/* {responseMessage && (
        <div className={`response-message ${responseType}`}>
          {responseMessage}
        </div>
      )} */}

      <form className="form-container" onSubmit={formik.handleSubmit}>
        <div className="reg-login-container">
          <div className="paytrakz-logo">
            <img src={paytrakz_logo} alt="Paytrakz logo" />
          </div>
          <div className="reg-heading">
            <img src={create_logo} alt="Create Account" />
          </div>
          <div className="reg-login-form">
            {/* First Name */}
            <div className="reg-firstName-container">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                id="firstName"
                className="reg-firstName-input"
                value={formik.values.firstName}
                {...formik.getFieldProps("firstName")}
                onBlur={(e) => {
                  formik.handleBlur(e);
                  if (formik.errors.firstName)
                    showErrorTemporarily("firstName");
                }}
              />
              {visibleErrors.firstName &&
                formik.touched.firstName &&
                formik.errors.firstName && (
                  <div className="reg-error">{formik.errors.firstName}</div>
                )}
            </div>

            {/* Last Name */}
            <div className="reg-lastName-container">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                id="lastName"
                className="reg-lastName-input"
                value={formik.values.lastName}
                {...formik.getFieldProps("lastName")}
                onBlur={(e) => {
                  formik.handleBlur(e);
                  if (formik.errors.lastName) showErrorTemporarily("lastName");
                }}
              />
              {visibleErrors.lastName &&
                formik.touched.lastName &&
                formik.errors.lastName && (
                  <div className="reg-error">{formik.errors.lastName}</div>
                )}
            </div>

            {/* Email */}
            <div className="reg-email-container">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                className="reg-email-input"
                value={formik.values.email}
                {...formik.getFieldProps("email")}
                onBlur={(e) => {
                  formik.handleBlur(e);
                  if (formik.errors.email) showErrorTemporarily("email");
                }}
              />

              {visibleErrors.email &&
                formik.touched.email &&
                formik.errors.email && (
                  <div className="reg-error">{formik.errors.email}</div>
                )}
            </div>

            {/* Phone Number */}
            <div className="reg-phone-container">
              <label htmlFor="phoneNo" className="reg-phone-label">
                Phone No
              </label>
              <div>
                <select
                  id="countryCode"
                  className="reg-countryCode-input"
                  value={formik.values.countryCode}
                  {...formik.getFieldProps("countryCode")}
                  onBlur={(e) => {
                    formik.handleBlur(e);
                    if (formik.errors.countryCode)
                      showErrorTemporarily("countryCode");
                  }}
                >
                  {countryCode.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
                <input
                  type="tel"
                  id="phoneNo"
                  className="reg-phone-input"
                  value={formik.values.phoneNo}
                  {...formik.getFieldProps("phoneNo")}
                  onBlur={(e) => {
                    formik.handleBlur(e);
                    if (formik.errors.phoneNo) showErrorTemporarily("phoneNo");
                  }}
                />
              </div>
              {visibleErrors.phoneNo &&
                formik.touched.phoneNo &&
                formik.errors.phoneNo && (
                  <div className="reg-error">{formik.errors.phoneNo}</div>
                )}
            </div>

            {/* Password */}
            <div className="reg-password-container">
              <div>
                <label htmlFor="userPassword">Password</label>
                <input
                  type="password"
                  id="userPassword"
                  className="reg-password-input"
                  value={formik.values.userPassword}
                  {...formik.getFieldProps("userPassword")}
                  onBlur={(e) => {
                    formik.handleBlur(e);
                    if (formik.errors.userPassword)
                      showErrorTemporarily("userPassword");
                  }}
                />
              </div>
              {visibleErrors.userPassword &&
                formik.touched.userPassword &&
                formik.errors.userPassword && (
                  <div className="reg-error">{formik.errors.userPassword}</div>
                )}
            </div>

            {/* Confirm Password */}
            <div className="reg-confirmPassword-container">
              <div>
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                  type="password"
                  id="confirmPassword"
                  className="reg-confirmPassword-input"
                  {...formik.getFieldProps("confirmPassword")}
                  onBlur={(e) => {
                    formik.handleBlur(e);
                    if (formik.errors.confirmPassword)
                      showErrorTemporarily("confirmPassword");
                  }}
                />
              </div>
              {visibleErrors.confirmPassword &&
                formik.touched.confirmPassword &&
                formik.errors.confirmPassword && (
                  <div className="reg-error">
                    {formik.errors.confirmPassword}
                  </div>
                )}
            </div>

            {/* Gender */}
            <div className="reg-gender-container">
              <label htmlFor="gender">Gender</label>
              <input
                type="text"
                id="gender"
                className="reg-gender-input"
                value={formik.values.gender}
                {...formik.getFieldProps("gender")}
                onBlur={(e) => {
                  formik.handleBlur(e);
                  if (formik.errors.gender) showErrorTemporarily("gender");
                }}
              />
              {visibleErrors.gender &&
                formik.touched.gender &&
                formik.errors.gender && (
                  <div className="reg-error">{formik.errors.gender}</div>
                )}
            </div>
          </div>
          <button type="submit" className="reg-sign-in" onClick={toggleForm}>
            Sign In
          </button>
          <button type="submit" className="reg-sign-up">
            Sign Up
          </button>
          <span className="reg-or">Or</span>
          <div className="reg-sign-in-with">
            <img src={google_logo} alt="Google logo" />
            <img src={apple_logo} alt="Apple logo" />
            <img src={windows_logo} alt="Windows logo" />
          </div>
          <footer>
            By Proceeding, You Agree To Our
            <a href="#"> Terms Of Use </a> and
            <a href="#"> Privacy Policy</a>
          </footer>
        </div>
      </form>
    </>
  );
};

export default SignUp_form;
