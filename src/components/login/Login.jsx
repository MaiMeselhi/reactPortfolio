import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import "./login.css"
const Login = () => {
  const initialValues = {
    email: "",
    password: "",
    rememberMe: false,
  };
  const onSubmit = () =>  alert('Login SUCCESS!!') + JSON.stringify(useFormik, null, 4)
  const validationSchema = yup.object({
    email: yup
      .string()
      .email("Please enter a valid email address")
      .required("Email field is required"),
    password: yup.string().required("Password field is required"),
  });

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="form" style={{ padding: 20 }}>
        <label htmlFor="email" style={{ display: "block" }}>
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          {...formik.getFieldProps("email")}
        />
        {formik.touched.email && formik.errors.email && (
          <div style={{ color: "red" }}>{formik.errors.email}</div>
        )}

        <label htmlFor="password" style={{ display: "block" }}>
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          {...formik.getFieldProps("password")}
        />
        {formik.touched.password && formik.errors.password && (
          <div style={{ color: "red" }}>{formik.errors.password}</div>
        )}

        <label htmlFor="rememberMe" style={{ display: "block" }}>
          Remember me
        </label>
        <input
          type="checkbox"
          name="rememberMe"
          id="rememberMe"
          defaultChecked={formik.values.rememberMe}
          {...formik.getFieldProps("rememberMe")}
        />

        <button className="login">Login</button>
      </div>
    </form>
  );
};
export default Login;