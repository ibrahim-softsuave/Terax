import React from "react";
import { Formik, Form, ErrorMessage } from "formik";
import "./Signinform.scss";
import { InputField } from "../../../components/InputComponents/inputField";
import * as YUP from "yup";
import { Error } from "../../../components/ErrorComponent/error";
import { authSignin } from "../../../service/authServices";
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";

export const SigninForm: React.FC<{}> = () => {
  const [serverErrors, setServerErrors] = useState("");
  useEffect(() => {
    if (serverErrors !== "") {
      const timeoutId = setTimeout(() => {
        setServerErrors("");
      }, 5500);
      
      return () => clearTimeout(timeoutId);
    }
  }, [serverErrors]);

  interface Signin {
    Username: string;
    Password: string;
  }
  const initialValues: Signin = {
    Username: "",
    Password: "",
  };

  const onSubmit = async (values: Signin) => {
    const response = await authSignin(values);
    if (response.data === "Signin Successfully") {
      <Link to="/home"></Link>;
    } else {
      if (response.data === "Server Error") {
        setServerErrors("Server Error");
      } else if (response.data === "Username is doesnot exist") {
        setServerErrors("Username is doesnot exist");
      } else if (response.data === "Password is mismatched") {
        setServerErrors("Password is mismatched");
      }
    }
  };
  const validationSchema = YUP.object({
    Username: YUP.string().required("Username is required"),
    Password: YUP.string().required("Password is required"),
  });

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      <Form className="form">
        <p className="form-header">Sigin In</p>
        {serverErrors  ? (
          <div className="server-error">
            <div className="server-error-item1">
              <p>{serverErrors}</p>
              <p className="close" onClick={()=>{setServerErrors('')}}>
                x
              </p>
            </div>
            <div className="server-error-item2">
            </div>
          </div>
        ) : (
          ""
        )}
        <div className="form-main">
          <div className="form-input-container">
            <label htmlFor="username">Username</label>
            <InputField
              type="text"
              id="Username"
              name="Username"
              placeholder="Enter a Username"
            />
            <ErrorMessage name="Username" component={Error} />
          </div>
          <div className="form-input-container">
            <label htmlFor="Password">Password</label>
            <InputField
              type="password"
              id="Password"
              name="Password"
              placeholder="Enter a Password"
            />
            <ErrorMessage name="Password" component={Error} />
          </div>
        </div>
        <div className="form-footer">
          <div className="form-input">
            <button type="submit">Sign In</button>
          </div>
        </div>
      </Form>
    </Formik>
  );
};
