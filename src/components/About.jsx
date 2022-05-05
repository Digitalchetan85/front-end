import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import AboutBanner from "../images/projects/project-1.png";

const About = () => {
  return (
    <>
      <div id="top-page" className="py-3 py-md-4 bg-secondary">
        <Container>
          <Row className="justify-content-center">
            <Col md={6}>
              <div className="text-center">
                <h1 className="fst-italic text-primary text-decoration-underline">
                  About Us
                </h1>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div id="about-content" className="py-3 py-md-5">
        <Container>
          <Row>
            <Col md={8}>
              <div className="">
                <h2 className="py-2 text-primary">Company Overview</h2>
                <h3 className="py-2 text-primary">Hello Reader,</h3>
                <h4 className="py-2 text-primary">
                  Yellow Walls is an online Real Estate Advisory Firm.
                </h4>
                <p>
                  The company visions to serve such property to their customers
                  which will not only have value today but for next 2 decades.
                  Our best sales & advisory team guides you to find your desired
                  home in current atmosphere of rapid development in India, We
                  specialize in providing specific real estate related local
                  knowledge to take an intelligent decision for our buyers for
                  their future investment.
                </p>
                <p>
                  We are a young enterprise and have aspiration of becoming a
                  giant we are bringing extensive online real estate technology
                  which provides first time home buyers innovative digital
                  technology to search, buy dreamhomes. It will help us to
                  identifying specific residential needs of Indian Customer and
                  Catering to these needs from a pool of Premier Real Estate
                  Developers throughout India.
                </p>
              </div>
            </Col>
            <Col md={4} className="align-self-center">
              <div className="text-center">
                <Image
                  src={AboutBanner}
                  alt="About Banner"
                  className="img-fluid"
                ></Image>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="pt-3 pb-3 pt-md-5 pb-md-5 bg-light">
        <Container>
          <Row className="justify-content-center">
            <Col md={6}>
              <div className="bg-white shadow p-3 rounded">
                <h2 className="pb-2 text-center text-primary">Our Vision</h2>
                <div className="text-center text-primary">
                  <i className="fas fa-eye fs-1 pb-2"></i>
                </div>
                <p className="pt-2 text-center">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged.
                </p>
              </div>
            </Col>
            <Col md={6}>
              <div className="bg-white shadow p-3 rounded">
                <h2 className="pb-2 text-center text-primary">Our Mision</h2>
                <div className="text-center text-primary">
                  <i className="fas fa-bullseye fs-1 pb-2"></i>
                </div>
                <p className="pt-2 text-center">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default About;
