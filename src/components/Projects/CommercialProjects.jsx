import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Project1 from '../../images/projects/project-1.png';
import Project2 from '../../images/projects/project-2.png';
import Project3 from '../../images/projects/project-3.png';

const CommercialProjects = () => {
  return (
    <>
      <div id="top-page" className="py-3 py-md-4 bg-secondary">
        <Container>
          <Row className="justify-content-center">
            <Col md={6}>
              <div className="text-center">
                <h1 className="fst-italic text-primary text-decoration-underline">
                  Commercial Projects
                </h1>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div id="project-1" className="py-3 py-md-5">
      <Container>
          <Row>
            <Col md={8}>
              <div className="">
                <h2 className="py-2 text-primary">Project Name</h2>
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
                <Link to="/contact" className="btn btn-primary">Contact Us</Link>
              </div>
            </Col>
            <Col md={4} className="align-self-center">
              <div className="text-center">
                <Image
                  src={Project1}
                  alt="About Banner"
                  className="img-fluid"
                ></Image>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div id="project-2" className="py-3 py-md-5 bg-primary">
      <Container>
          <Row>
            <Col md={4} className="align-self-center">
              <div className="text-center">
                <Image
                  src={Project2}
                  alt="About Banner"
                  className="img-fluid"
                ></Image>
              </div>
            </Col>
            <Col md={8}>
              <div className="">
                <h2 className="py-2 text-white">Project Name</h2>
                <p className="text-white">
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
                <p className="text-white">
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
                <Link to="/contact" className="btn btn-secondary">Contact Us</Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div id="project-3" className="py-3 py-md-5">
      <Container>
          <Row>
            <Col md={8}>
              <div className="">
                <h2 className="py-2 text-primary">Project Name</h2>
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
                <Link to="/contact" className="btn btn-primary">Contact Us</Link>
              </div>
            </Col>
            <Col md={4} className="align-self-center">
              <div className="text-center">
                <Image
                  src={Project3}
                  alt="About Banner"
                  className="img-fluid"
                ></Image>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default CommercialProjects;
