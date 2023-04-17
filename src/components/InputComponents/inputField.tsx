import { Field } from "formik";
import React from "react";
import './inputField.scss'
interface  InputFieldProps {
    type: string;
    id:string;
    name:string
    placeholder:string;    
    }
export const InputField :React.FC<InputFieldProps> = (props) => {
    const {type,id,name,placeholder,}=props
  return (
    <div className="form-input">
      <Field
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        autoComplete="off"
      />
      </div>
  );
};

