import React from "react";
import { useFormik } from "formik";
import "./loginform.scss";
import { InputField } from "../../../components/inputField";

export const LoginForm = () => {
  interface Signin {
    username: string;
    password: string;
  }

  const formik = useFormik<Signin>({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
      <form onSubmit={formik.handleSubmit} className="form">
        <p className="form-header">Sigin In</p>
        <div className="form-main">
          <div className="form-input-container">
            <label htmlFor="username">Username</label>
            <InputField 
            type="text"
            id='Username'
            name='Username'
            value={formik.values.username}
            onChange={formik.handleChange}
            placeholder="Enter a Username"
            />
          </div>
          <div className="form-input-container">
            <label htmlFor="Password">Password</label>
            <div className="form-input">
              <input
                type="password"
                id="Password"
                name="passWord"
                value={formik.values.username}
                onChange={formik.handleChange}
                placeholder='Enter a Password'
              ></input>
            </div>
          </div>
        </div>
        <div className="form-footer">
          <div className="form-input">
            <button>Sign In</button>
          </div>
        </div>
      </form>
  );
};
