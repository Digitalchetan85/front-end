import React, { useState } from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

const Contact = () => {
  const [formStatus, setformStatus] = useState("");

  const initialValues = {
    name: "",
    email: "",
    phone: "",
    msg: "",
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
    msg: Yup.string().required("Required"),
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
                  Contact Us
                </h1>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div id="contact-page" className="py-3 py-md-5">
        <Container>
          <Row className="justify-content-center">
            <Col md={4} className="align-self-center">
              <Row>
                <Col md={3} xs={3} className="align-self-center">
                  <div className="text-center">
                    <i className="fas fa-map-marker-alt text-primary fs-1"></i>
                  </div>
                </Col>
                <Col md={9} xs={9}>
                  <div className="">
                    <ul className="list-unstyled">
                      <li>#483, 1st Floor, 10th Main</li>
                      <li>8th Cross, Jeevan Bima Nagar</li>
                      <li>HAL 3rd Stage, Bangalore - 560 075</li>
                    </ul>
                  </div>
                </Col>
              </Row>
            </Col>
            <Col md={4} className="align-self-center">
              <Row>
                <Col md={3} xs={3} className="align-self-center">
                  <div className="text-center">
                    <i className="far fa-clock text-primary fs-1"></i>
                  </div>
                </Col>
                <Col md={9} xs={9}>
                  <div className="">
                    <ul className="list-unstyled">
                      <li>Timings:</li>
                      <li>Mon - Sat : 10AM - 6PM</li>
                      <li>Sun : Holiday</li>
                    </ul>
                  </div>
                </Col>
              </Row>
            </Col>
            <Col md={4} className="align-self-center">
              <div className="text-center">
                <h3 className="text-primary">Social Connect</h3>
                <i className="fab fa-facebook-f text-primary fs-1 mx-1 border rounded p-3"></i>
                <i className="fab fa-instagram text-primary fs-1 mx-1 border rounded p-3"></i>
                <i className="fab fa-youtube text-primary fs-1 mx-1 border rounded p-3"></i>
                <i className="fab fa-linkedin text-primary fs-1 mx-1 border rounded p-3"></i>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div id="contact-inner" className="py-3 py-md-5 bg-light">
        <Container>
          <Row>
            <Col md={6} className="align-self-center">
              <div className="text-center">
                <h2 className="text-primary py-2">Any Queries? Mail Us.</h2>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here, content here', making it look like readable English.{" "}
                </p>
              </div>
            </Col>
            <Col md={6} className="align-self-center">
              <div className="p-3 bg-white">
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
                            as="textarea"
                            rows="6"
                            type="text"
                            className="form-control"
                            id="msg"
                            name="msg"
                            placeholder="Message"
                          />
                          <small className="text-danger">
                            <ErrorMessage name="msg" />
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
            </Col>
          </Row>
        </Container>
      </div>

      <div id="map">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.050822316971!2d77.63219841409055!3d13.032435617068359!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae176a04ba7645%3A0x2e6f9357af5e5de0!2sLogo%20Design%20Company%20Bangalore!5e0!3m2!1sen!2sin!4v1650880471445!5m2!1sen!2sin" width="100%" height="450" ></iframe>
    </div>                      

    </>
  );
};

export default Contact;
