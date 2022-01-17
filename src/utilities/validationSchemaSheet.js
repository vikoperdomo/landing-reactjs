import * as yup from "yup";

export const ValidationGoogelSheerSchema = yup.object().shape({
  name: yup
    .string()
    .max(50, "Must be 50 characters or less")
    .required("Required"),

  email: yup
    .string()
    .email("Email is invalid")
    .required("Required"),
  teamIsFrisson: yup
    .boolean()
    .required("Required")
    .oneOf([true], "You must accept the terms and conditions."),

  addRoles: yup.array().of(
    yup.object().shape({
      addRoleEmail: yup
        .string()
        .email("Email is invalid")
        .required("Email is required"),
    })
  ),
});
