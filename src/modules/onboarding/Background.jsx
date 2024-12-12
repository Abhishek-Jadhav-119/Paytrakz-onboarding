import "./css/Background.css";
import paytrakzImg from "./../../assets/images/paytrakzImg.png";
import loginGirl from "./../../assets/images/login-girl.png";
import SignIn_form from "./SignIn_form";
import SignUp_form from "./SignUp_form";
import { useState } from "react";

const Login_background = () => {
  //State to toggle between login and registration froms
  const [isLoginPage, setIsLoginPage] = useState(true);

  //Function to toggle the forms
  const toggleForm = () => {
    setIsLoginPage((prev) => !prev);
  };

  return (
    <div className="main-container">
      <div className="left-section">
        <div className="left-title">
          <img src={paytrakzImg} alt="Paytrakz heading above the login girl" />
          <p id="left-paragraph">
            <span>
              Together, our partnership will help your business
              <br />
              flourish and build Strong alliances
            </span>
          </p>
        </div>
        <div className="left-image">
          <img src={loginGirl} alt="Girl is logging into Paytrakz app" />
        </div>
      </div>

      {/* conditionally render the login or registration form */}
      {isLoginPage ? (
        <SignIn_form toggleForm={toggleForm} />
      ) : (
        <SignUp_form toggleForm={toggleForm} />
      )}

      <div className="right_section"></div>
    </div>
  );
};

export default Login_background;
