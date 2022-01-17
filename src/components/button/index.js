import React from "react";
import { Spinner } from "../spinner";
import "./styles.scss";
const Button = ({
  type,
  btnText,
  btnLink,
  size,
  btnStyle,
  color,
  onClick,
  disabled,
  loading,
}) => {
  return type === "link" ? (
    <a
      className={`frisson-btn fr-btn-${color} btn-${size}-size btn-${btnStyle} space-between`}
      href={btnLink}
      onClick={onClick}
    >
      {btnText}
    </a>
  ) : (
    <button
      className={`frisson-btn fr-btn-${color} btn-${size}-size btn-${btnStyle} space-between`}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      <div className={`content-button ${loading ? "button-spinner" : ""}`}>
        <span>{btnText}</span>{" "}
        <span style={{ marginLeft: 20 }}>{loading ? <Spinner /> : null}</span>
      </div>
    </button>
  );
};

export default Button;
