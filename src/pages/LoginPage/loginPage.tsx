import React from "react";
import "./styles.scss";
import { SigninForm } from "../../containers/forms/SigninForm/Signinfrom";
import { RegisterForm } from "../../containers/forms/RegisterForm/RegisterForm";
import { FormNavigate } from "../../components/FormNavigate/formNavigate";
interface Tprops {
  page: string;
}
export const LoginPage: React.FC<Tprops> = ({ page }) => {
  return (
    <div className="form-background">
      <div className="form-build">
        <div className="form-container">
          {page === "signin" && <SigninForm />}
          {page === "register" && <RegisterForm />}
        </div>
          <FormNavigate page={page} />
      </div>
    </div>
  );
};
