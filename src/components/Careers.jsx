import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import * as Yup from "yup";
import { ErrorMessage, Field, Form, Formik } from "formik";

const Careers = () => {
  const [formStatus, setformStatus] = useState("");

  const initialValues = {
    name: "",
    email: "",
    phone: "",
    message: "",
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
    message: Yup.string().required("required"),
  });

  const onSubmit = (values) => {
    setformStatus("");
  };
  return (
    <>
      <div id="top-page" className="py-3 py-md-4 bg-secondary">
        <Container>
          <Row className="justify-content-center">
            <Col md={6}>
              <div className="text-center">
                <h1 className="fst-italic text-primary text-decoration-underline">
                  Careers
                </h1>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div id="about-content" className="py-3 py-md-5">
        <Container>
          <Row>
            <Col md={12}>
              <div className="">
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here, content here', making it look like readable English.
                  Many desktop publishing packages and web page editors now use
                  Lorem Ipsum as their default model text, and a search for
                  'lorem ipsum' will uncover many web sites still in their
                  infancy. Various versions have evolved over the years,
                  sometimes by accident, sometimes on purpose (injected humour
                  and the like).
                </p>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here, content here', making it look like readable English.
                  Many desktop publishing packages and web page editors now use
                  Lorem Ipsum as their default model text, and a search for
                  'lorem ipsum' will uncover many web sites still in their
                  infancy. Various versions have evolved over the years,
                  sometimes by accident, sometimes on purpose (injected humour
                  and the like).
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="py-3 py-md-5">
        <Container>
          <Row className="justify-content-center">
            <Col md={6}>
              <div className="p-3 bg-light">
                <Formik
                  initialValues={initialValues}
                  validationSchema={validationSchema}
                  onSubmit={onSubmit}
                >
                  <Form className="p-3">
                    <Row className="mb-3">
                      <Col md={12}>
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
                    </Row>
                    <Row className="mb-3">
                      <Col md={12}>
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
                    </Row>
                    <Row className="mb-3">
                      <Col md={12}>
                        <div className="mb-1">
                          <Field
                            type="tel"
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
                    <Row className="mb-3">
                      <Col md={12}>
                        <div className="mb-1">
                          <Field
                            as="select"
                            type="text"
                            className="form-control"
                            id="persons"
                            name="persons"
                            placeholder="No of Persons"
                          >
                              <option value="">--Select--</option>
                              <option value="">Position 1</option>
                              <option value="">Position 2</option>
                          </Field>
                          <small className="text-danger">
                            <ErrorMessage name="persons" />
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
                            id="message"
                            name="message"
                            placeholder="Message"
                          />
                          <small className="text-danger">
                            <ErrorMessage name="message" />
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
                            Apply Now
                          </Button>
                        </div>
                      </Col>
                    </Row>
                  </Form>
                </Formik>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Careers;
