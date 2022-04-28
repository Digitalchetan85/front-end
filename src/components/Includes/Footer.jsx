import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import FooterForm from "./FooterForm";

const Footer = () => {
  return (
    <div id="footer" className="pt-3 pt-md-5 bg-primary">
      <Container>
        <Row className="mb-3">
          <Col md={3}>
            <div className="">
              <h3 className="text-white text-uppercase">Quick Links</h3>
              <ul>
                <li className="text-white"><Link to="/yellow-walls" className="text-white text-decoration-none">Home</Link></li>
                <li className="text-white"><Link to="/about" className="text-white text-decoration-none">About Us</Link></li>
                <li className="text-white"><Link to="/gallery" className="text-white text-decoration-none">Gallery</Link></li>
                <li className="text-white"><Link to="/careers" className="text-white text-decoration-none">Careers</Link></li>
                <li className="text-white"><Link to="/contact" className="text-white text-decoration-none">Contact</Link></li>
              </ul>
            </div>
          </Col>
          <Col md={3}>
            <div className="">
              <h3 className="text-white text-uppercase">Contact</h3>
              <ul className="list-unstyled">
                <li className="text-white">#483, 1st Floor, 10th Main</li>
                <li className="text-white">8th Cross, Jeevan Bima Nagar</li>
                <li className="text-white">HAL 3rd Stage, Bangalore - 560 075</li>
                <li className="text-white">Phone: <a href="tel:09513838585" className="text-white text-decoration-none">+ 91 95138 38585</a></li>
                <li className="text-white">Email: <a href="mailto:info@company.com" className="text-white text-decoration-none">info@company.com</a></li>
              </ul>
            </div>
          </Col>
          <Col md={3}>
            <div className="">
              <h3 className="text-white text-uppercase">Projects</h3>
              <ul>
                <li className="text-white">On Going Projects</li>
                <li className="text-white">Completed Projects</li>
                <li className="text-white">All Projects</li>
              </ul>
            </div>
          </Col>
          <Col md={3}>
            <div className="">
              <h3 className="text-white text-uppercase">Write to Us</h3>
              <FooterForm />
            </div>
          </Col>
        </Row>
        <Row className="justify-content-center border-top pt-2">
          <Col md={6}>
            <div className="text-center">
              <p className="text-center text-white">
                © 2022 Yellow Walls. All Rights Reserved. Designed & Developed
                by{" "}
                <a
                  href=""
                  target="_blank"
                  className="text-white text-decoration-none"
                >
                  LDCB
                </a>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
