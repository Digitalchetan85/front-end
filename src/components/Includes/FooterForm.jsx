import React, { useState } from "react";
import { Button, Row, Col } from "react-bootstrap";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const FooterForm = () => {
  const [formStatus, setformStatus] = useState("");

  const initialValues = {
    name: "",
    email: "",
    phone: "",
  };

  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const validationSchema = Yup.object({
    name: Yup.string().required("Required"),
    email: Yup.string().required("required").email("Invalid email format"),
    phone: Yup.string()
      .required("required")
      .matches(phoneRegExp, "Phone No is not valid")
      .min(10, "Phone No Minimum 10 Digits")
      .max(10, "Phone No Minimum 10 Digits"),
  });

  const onSubmit = (values) => {
    setformStatus('')
  };
  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form className="">
          <Row className="mb-3">
            <Col md={6}>
              <div className="mb-3">
                <Field
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  placeholder="Name"
                />
                <small className="text-danger">
                  <ErrorMessage name="name" />
                </small>
              </div>
            </Col>
            <Col md={6}>
              <div className="mb-3">
                <Field
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  placeholder="Phone"
                />
                <small className="text-danger">
                  <ErrorMessage name="name" />
                </small>
              </div>
            </Col>
          </Row>
          <Row className="mb-3">
            <Col md={6}>
              <div className="mb-3">
                <Field
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  placeholder="Email"
                />
                <small className="text-danger">
                  <ErrorMessage name="email" />
                </small>
              </div>
            </Col>
            <Col md={6}>
              <div className="mb-3">
                <Field
                    as="select"
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  placeholder="Projects"
                >
                    <option value="">Project1</option>
                    <option value="">Project2</option>
                    <option value="">Project3</option>
                </Field>
                <small className="text-danger">
                  <ErrorMessage name="name" />
                </small>
              </div>
            </Col>
          </Row>
          <Row className="mb-3">
            <Col md={12}>
              <div className="mb-1">
                <Field
                    as="textarea"
                  type="text"
                  className="form-control"
                  id="phone"
                  name="phone"
                  placeholder="Enter phone number"
                />
                <small className="text-danger">
                  <ErrorMessage name="phone" />
                </small>
              </div>
            </Col>
          </Row>
          <Row className="">
            <Col md={12}>
              {formStatus ? (
                <div className="alert alert-success p-3 text-center">
                  {formStatus}
                </div>
              ) : null}
            </Col>
          </Row>
          <Row className="">
            <Col md={12}>
              <div className="">
                <Button
                  className="btn btn-success text-white text-uppercase form-control"
                  type="submit"
                >
                  Submit
                </Button>
              </div>
            </Col>
          </Row>
        </Form>
      </Formik>
    </div>
  );
};

export default FooterForm;
