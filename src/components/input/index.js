import React from "react";

const Input = ({
  type,
  name,
  id,
  placeholder,
  required,
  value,
  className,
  onChange,
}) => {
  return type === "textarea" ? (
    <textarea
      id={id}
      name={name}
      placeholder={placeholder}
      required={required}
      className={className}
      onChange={onChange}
    />
  ) : (
    <input
      type={type}
      id={id}
      name={name}
      placeholder={placeholder}
      value={value && value}
      required={required}
      className={className}
      onChange={onChange}
    />
  );
};

export default Input;
