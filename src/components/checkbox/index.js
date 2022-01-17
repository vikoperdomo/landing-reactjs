import React from "react";
import { useField } from "formik";
import "./styles.scss";
const MyCheckbox = ({ children, ...props }) => {
  const [field, meta] = useField({ ...props, type: "checkbox" });
  return (
    <>
      <label className="content-checkbox">
        <input
          {...field}
          {...props}
          className="input-checkbox"
          type="checkbox"
        />
        {children}
      </label>
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};
export default MyCheckbox;
