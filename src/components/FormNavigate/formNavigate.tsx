import React from "react";
import { Link } from "react-router-dom";
import "./formNavigate.scss";

interface Tprops {
  page: string;
}
export const FormNavigate: React.FC<Tprops> = ({ page }) => {
  return (
    <>
      {page === "signin" && (
        <>
          <div className="signup-indicator">
            <p>Don't have you an account?</p>
            <Link to="/register">Register</Link>
          </div>
        </>
      )}
      {page === "register" && (
        <>
          <div className="signup-indicator">
            <p>Already have you an account?</p>
            <Link to="/signin">Signin</Link>
          </div>
        </>
      )}
    </>
  );
};
