import React from "react";
import { Col, Container, Image, Row, Tab, Nav } from "react-bootstrap";
import Banner from "../images/slider/image-1.png";
import Footer from "./Includes/Footer";
import AllProjects from "./Includes/Projects/AllProjects";
import CompletedProjects from "./Includes/Projects/CompletedProjects";
import OnGoingProjects from "./Includes/Projects/OnGoingProjects";
import Testimonials from "./Includes/Testimonials";

const Home = () => {
  return (
    <>
     <div id="baner">
        <div className="text-center">
          <Image src={Banner} alt="Banner" className="img-fluid"></Image>
        </div>
      </div>   <div id="baner">
        <div className="text-center">
          <Image src={Banner} alt="Banner" className="img-fluid"></Image>
        </div>
      </div>

      <div id="first-section" className="py-3 py-md-4 bg-secondary">
        <Container>
          <Row className="justify-content-center">
            <Col md={6}>
              <div className="text-center">
                <h2 className="text-center text-primary">
                  WELCOME TO YELLOW WALLS
                </h2>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div id="second-section" className="py-3 py-md-5">
        <Container>
          <Row>
            <Col md={12}>
              <div className="">
                <p className="lh-lg">
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
                <p className="lh-lg">
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

      <div id="third-section" className="py-3 py-md-5 bg-primary">
        <Container>
          <Row>
            <Col md={12}>
                <h2 className="py-1 text-white text-uppercase text-center">Our Projects</h2>
              <div className="">
                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                  <Row>
                    <Col sm={12}>
                      <Nav
                        variant="pills"
                        className="flex-row justify-content-center py-3"
                      >
                        <Nav.Item>
                          <Nav.Link eventKey="first">All Projects</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="second">Ongoing Projects</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="third">Completed Projects</Nav.Link>
                        </Nav.Item>
                      </Nav>
                    </Col>
                    <Col sm={12}>
                      <Tab.Content className="py-3">
                        <Tab.Pane eventKey="first">
                          <AllProjects />
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                          <OnGoingProjects />
                        </Tab.Pane>
                        <Tab.Pane eventKey="third">
                          <CompletedProjects />
                        </Tab.Pane>
                      </Tab.Content>
                    </Col>
                  </Row>
                </Tab.Container>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div id="forth-section" className="py-3 py-md-5 bg-secondary">
        <Testimonials />
      </div>
    </>
  );
};

export default Home;
