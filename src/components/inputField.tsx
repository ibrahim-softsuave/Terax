import React from "react";

interface  InputFieldProps {
    type: string;
    id:string;
    name:string
    value:any;
    onChange:any;
    placeholder:string;    
    }
export const InputField :React.FC<InputFieldProps> = (props) => {
    const {type,id,name,value,onChange,placeholder}=props
  return (
    <div className="form-input">
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      ></input>
    </div>
  );
};
