import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

const Login = () => {
  // console.log("Render 1");
  const [selectedOption, setSelectedOption] = React.useState("");
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value + " rockstar");
  };
  React.useEffect(() => {
    console.log(selectedOption);
    return () => {
      // setTimeout(() => {
      //   console.log("Render 2");
      // }, 5000);
      // console.log("callback to ensure the completely pdated state")
    };
  }, [selectedOption]);
  // console.log("Render 3");
  return (
    <div>
      <h1>Any place in your app!</h1>
      <Formik
        initialValues={{ email: "", password: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <Field type="email" name="email" placeholder="name@esp.com" />
            <ErrorMessage name="email" component="div" />
            <Field type="password" name="password" placeholder="password" />
            <ErrorMessage name="password" component="div" />
            <input
              type="radio"
              name={selectedOption}
              value="First"
              checked={selectedOption.includes("First")}
              onChange={handleOptionChange}
            />
            <label>First</label>
            <input
              type="radio"
              name={selectedOption}
              value="Second"
              checked={selectedOption.includes("Second")}
              onChange={handleOptionChange}
            />
            <label>Second</label>
            {selectedOption.includes("First") && (
              <>
                <Field
                  type="text"
                  name="single"
                  placeholder="price"
                  value={selectedOption.replace(" rockstar", "")}
                />
                <ErrorMessage name="email" component="div" />
                <Field
                  type="text"
                  name="double"
                  placeholder="price doubled"
                  value={selectedOption}
                />
                <ErrorMessage name="password" component="div" />
              </>
            )}
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Login;
