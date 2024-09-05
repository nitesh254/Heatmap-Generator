import { signInWithEmailAndPassword } from "firebase/auth";
import React from "react";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { auth } from "./firebase";
import { toastifyMessage } from "../../../utils/helper";
import { Navigate, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate()
  const initialValues = {
    email: '',
    password: '',
  };


  const validationSchema = Yup.object().shape({
    email: Yup.string().required('Email is required').min(3, 'Email must be at least 3 characters'),
    password: Yup.string().required('Password is required').min(3, 'Password must be at least 3 characters'),
  });

  const handleSubmit = (values, { setSubmitting }) => {
    signInWithEmailAndPassword(auth, values.email, values.password)
      .then((userCredential) => {
        console.log(userCredential);
        // toastifyMessage("Logged In Successfully", "success");
        setTimeout(() => {
          navigate("/uploadcsv")
        }, 2000);
       
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setSubmitting(false);
      });
  };

  return (
    <div className="login-box">
      <h2>Login</h2>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
        <Form>
          <div className="user-box">
            <Field type="text" name="email" />
            <label>Email</label>
            <ErrorMessage name="email" component="div" className="error" />
          </div>
          <div className="user-box">
            <Field type="password" name="password" />
            <label>Password</label>
            <ErrorMessage name="password" component="div" className="error" />
          </div>
          <button type="submit" className="login-button">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};

export default Login;
