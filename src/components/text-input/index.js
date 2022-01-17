import React from "react";
import { useField } from "formik";

const TextInput = ({ label, className = "", ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input
        className={`${
          meta.touched && meta.error ? "is-invalid " : ""
        }text-input ${className}`}
        style={{ borderRadius: 4 }}
        {...field}
        {...props}
      />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};

export default TextInput;
