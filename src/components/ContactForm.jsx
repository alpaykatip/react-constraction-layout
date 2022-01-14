import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { FaCheck } from "react-icons/fa";

const ContactForm = () => {
  return (
    <section className='contact-form'>
      <div className='contact-form-title'>
        <h1>Contact us and create your project now!</h1>
        <p>
          <FaCheck /> Affordable Price
        </p>
        <p>
          <FaCheck /> Always dedicated and devoted.
        </p>
        <p>
          <FaCheck /> Construction you can count on.
        </p>
      </div>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          phoneNumber: "",
          email: "",
          message: "",
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, "Must be 15 characters or less")
            .required("Required"),
          lastName: Yup.string()
            .max(20, "Must be 20 characters or less")
            .required("Required"),
          phoneNumber: Yup.number()
            .min(11, "At least 11 numbers")
            .required("Required"),
          email: Yup.string()
            .email("Invalid email address")
            .required("Required"),
          message: Yup.string()
            .min(20, "Must be 20 characters or more")
            .required("Required"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {(formik) => (
          <form className='formik-form' onSubmit={formik.handleSubmit}>
            <input
              id='firstName'
              type='text'
              placeholder='Name'
              {...formik.getFieldProps("firstName")}
            />
            {formik.touched.firstName && formik.errors.firstName ? (
              <div>{formik.errors.firstName}</div>
            ) : null}

            <input
              id='lastName'
              type='text'
              placeholder='Surname'
              {...formik.getFieldProps("lastName")}
            />
            {formik.touched.lastName && formik.errors.lastName ? (
              <div>{formik.errors.lastName}</div>
            ) : null}

            <input
              id='phoneNumber'
              type='number'
              placeholder='Phone Number'
              {...formik.getFieldProps("phoneNumber")}
            />
            {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
              <div>{formik.errors.phoneNumber}</div>
            ) : null}

            <input
              id='email'
              type='email'
              placeholder='E-Mail'
              {...formik.getFieldProps("email")}
            />
            {formik.touched.email && formik.errors.email ? (
              <div>{formik.errors.email}</div>
            ) : null}

            <input
              id='message'
              type='message'
              placeholder='Your Message'
              {...formik.getFieldProps("message")}
            />
            {formik.touched.message && formik.errors.message ? (
              <div>{formik.errors.message}</div>
            ) : null}

            <button type='submit' className='btn-contact-rom'>
              Send
            </button>
          </form>
        )}
      </Formik>
    </section>
  );
};

export default ContactForm;
