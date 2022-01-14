import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import Button from "./shared/Button";

export const SubForm = () => {
  return (
    <Formik
      initialValues={{ email: "" }}
      validationSchema={Yup.object({
        email: Yup.string().email("Invalid email address").required("Required"),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {(formik) => (
        <form className='sub-form-grup' onSubmit={formik.handleSubmit}>
          <input
            id='email'
            type='email'
            placeholder='Subscribe for discount and campaigns'
            {...formik.getFieldProps("email")}
          />
          {formik.touched.email && formik.errors.email ? (
            <div>{formik.errors.email}</div>
          ) : null}

          <Button type='submit'>Subscribe</Button>
        </form>
      )}
    </Formik>
  );
};
