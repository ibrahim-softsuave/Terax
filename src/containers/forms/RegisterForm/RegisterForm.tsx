import React from "react";
import { Formik, Form, ErrorMessage } from "formik";
import * as YUP from "yup";
import { Error } from "../../../components/ErrorComponent/error";
import { InputField } from "../../../components/InputComponents/inputField";
import { useState } from "react";
import "./RegisterForm.scss";

export const RegisterForm = () => {
  const [step, SetStep] = useState<number>(1);
  const goToPreviousStep = () => {
    SetStep((value) => value - 1);
  };
  const goToNextStep = () => {
    SetStep((value) => value + 1);
  };
  interface Register {
    firstName: string;
    lastName: string;
    userName: string;
    email: string;
    phoneNumber: string;
    password: string;
    confirmPassword: string;
  }
  const initialValues: Register = {
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  };
  const onSubmit = (values: Register) => {
    console.log(values);
  };
  const validationSchema = YUP.object({
    firstName: YUP.string().required("First name is required"),
    lastName: YUP.string().required("Last name is required"),
    userName: YUP.string().required("Username is required"),
    email: YUP.string()
      .email("Invalid Email address")
      .required("Email is required"),
    phoneNumber: YUP.string()
      .matches(/^[0-9]{10}$/, "Phone number is not valid")
      .required("Phone Number is required"),
    password: YUP.string().required("Password is required"),
    confirmPassword: YUP.string()
      .oneOf([YUP.ref("password")], "Passwords must match")
      .required("Confirm Password is required"),
  });
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      <Form className="form-register">
        {step === 1 && (
          <>
            <div className="form-register-header">Register</div>
            <div className="form-register-main">
              <div className="form-elements">
                <label htmlFor="firstName">First name</label>
                <InputField
                  type="text"
                  id="firstName"
                  name="firstName"
                  placeholder="Enter a First name"
                />
                  <ErrorMessage name="firstName" component={Error} />
              </div>
              <div className="form-elements">
                <label htmlFor="lastName">Last name</label>
                <InputField
                  type="text"
                  id="lastName"
                  name="lastName"
                  placeholder="Enter a Last Name"
                />
              <ErrorMessage name="lastName" component={Error} />
              </div>
              <div className="form-elements">
                <label htmlFor="userName">Username</label>
                <InputField
                  type="text"
                  id="userName"
                  name="userName"
                  placeholder="Enter a Username"
                />
                <ErrorMessage name="userName" component={Error} />
              </div>
            </div>
            <div className="register-form-fist-page-footer">
              <button
                className="footer-button"
                onClick={goToNextStep}
                type="button"
              >
                Next
              </button>
            </div>
          </>
        )}
        {step === 2 && (
          <>
            <div className="form-register-second-main">
              <div className="form-elements">
                <label htmlFor="email">Email</label>
                <InputField
                  type="text"
                  id="email"
                  name="email"
                  placeholder="Enter a Email"
                />
                <ErrorMessage name="email" component={Error} />
              </div>
         
              <div className="form-elements">
                <label htmlFor="phoneNumber">PhoneNumber</label>
                <InputField
                  type="text"
                  id="phoneNumber"
                  name="phoneNumber"
                  placeholder="Enter a PhoneNumber"
                />
                <ErrorMessage name="phoneNumber" component={Error} />
              </div>
              
              <div className="form-elements">
                <label htmlFor="password">Password</label>
                <InputField
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Enter a Password"
                />
                     <ErrorMessage name="password" component={Error} />
              </div>
         
              <div className="form-elements">
                <label htmlFor="confirmPassword">ConfirmPassword</label>
                <InputField
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  placeholder="Enter a ConfirmPassword"
                />
                  <ErrorMessage name="confirmPassword" component={Error} />
              </div>
            
            </div>
            <div className="register-form-second-page-footer">
              <button
                className="footer-button"
                onClick={goToPreviousStep}
                type="button"
              >
                prev
              </button>
              <button className="footer-button" type="submit">
                Submit
              </button>
            </div>
          </>
        )}
      </Form>
    </Formik>
  );
};
