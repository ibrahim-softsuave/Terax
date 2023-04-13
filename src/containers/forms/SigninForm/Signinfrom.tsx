import React from "react";
import { Formik,Form,ErrorMessage } from "formik";
import "./Signinform.scss";
import { InputField } from "../../../components/InputComponents/inputField";
import * as YUP from 'yup'
import { Error } from "../../../components/ErrorComponent/error";


export const SigninForm:React.FC<{}> = () => {
  interface Signin {
    Username: string;
    Password: string;
  }
  const initialValues:Signin = {
    Username:'',
    Password:''
  }
  const onSubmit =(values:Signin)=>{
    console.log(values)
  }
  const validationSchema=YUP.object({
    Username:YUP.string().required('Username is required'),
    Password:YUP.string().required('Password is required')
  })

  return (
    <Formik
    initialValues={initialValues}
    onSubmit={onSubmit}
    validationSchema={validationSchema}
    >
      <Form  className="form">
        <p className="form-header">Sigin In</p>
        <div className="form-main">
          <div className="form-input-container">
            <label htmlFor="username">Username</label>
            <InputField 
            type="text"
            id='Username'
            name='Username'
            placeholder="Enter a Username"
            />
            <ErrorMessage name='Username' component={Error}/>
          </div>
          <div className="form-input-container">
            <label htmlFor="Password">Password</label>
              <InputField
                type="password"
                id="Password"
                name="Password"
                placeholder='Enter a Password'
              />
              <ErrorMessage name='Password'  component={Error}/>
          </div>
        </div>
        <div className="form-footer">
          <div className="form-input">
            <button>Sign In</button>
          </div>
        </div>
      </Form>
      </Formik>
  );
};
