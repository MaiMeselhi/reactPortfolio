import React from "react";
import { Formik, Form } from "formik";
import * as yup from "yup";
import FormikField from "./FormikField";
import "./Register.css";

const RegiserFormikComponents = () => {
  const initialValues = {
    gender: "",
    email: "",
    password: "",
    rememberMe: false,
    confirmPassword: "",
    acceptTerms: false,
  };
  const onSubmit = () =>
    alert("Registration SUCCESS!!") + JSON.stringify(Formik, null, 4);

  const validationSchema = yup.object({
    gender: yup.string().required("Title is required"),
    email: yup
      .string()
      .email("Please enter a valid email address")
      .required("Email field is required"),

    password: yup
      .string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
    acceptTerms: yup.bool().oneOf([true], "Accept Ts & Cs is required"),
  });

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {(formik) => {
        return (
          <Form>
            <div className="form"style={{ padding: 20 }}>

              <FormikField label="Gender" name="gender" type="radio">
               <option value="male" name="gender">
                  Male
                </option>
                <option value="male" name="gender">
                  Female
                </option>
              </FormikField>
              <FormikField label="Email" name="email" type="email" />
              <FormikField label="Password" name="password" type="password" />
              <FormikField
                label="confirmPassword"
                name="confirmPassword"
                type="password"
              />
              <FormikField
                label="acceptTerms"
                name="acceptTerms"
                type="checkbox"
              />
              <FormikField
                label="Remember Me"
                name="rememberMe"
                type="checkbox"
              />
              <button className="register">Register</button>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};
export default RegiserFormikComponents;
