import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";
import Image1 from "../images/projects/project-2.png";
import Image2 from "../images/projects/project-3.png";
import Image3 from "../images/projects/project-1.png";
import Image4 from "../images/projects/project-2.png";
import Image5 from "../images/projects/project-3.png";
import Image6 from "../images/projects/project-1.png";
import Image7 from "../images/projects/project-2.png";
import Image8 from "../images/projects/project-3.png";

const Gallery = () => {
  const images = [
    { id: 1, imgName: Image1, alt: "", tag: "1" },
    { id: 2, imgName: Image2, alt: "", tag: "2" },
    { id: 3, imgName: Image3, alt: "", tag: "1" },
    { id: 4, imgName: Image4, alt: "", tag: "2" },
    { id: 5, imgName: Image5, alt: "", tag: "1" },
    { id: 6, imgName: Image6, alt: "", tag: "2" },
    { id: 7, imgName: Image7, alt: "", tag: "1" },
    { id: 8, imgName: Image8, alt: "", tag: "2" },
  ];

  return (
    <>
      <div id="top-page" className="py-3 py-md-4 bg-secondary">
        <Container>
          <Row className="justify-content-center">
            <Col md={6}>
              <div className="text-center">
                <h1 className="fst-italic text-primary text-decoration-underline">
                  Gallery
                </h1>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div id="gallery" className="pt-3 pb-3 pt-md-5 pb-md-5 bg-light">
        <Container>
          <SimpleReactLightbox>
            <SRLWrapper>
              <Row className="g-3">
                {images.map((item) => (
                  <Col md={3} xs={6} key={item.id}>
                    <div className="m-1 text-center border rounded">
                      <a href={item.imgName}>
                        <Image
                          src={item.imgName}
                          alt={item.alt}
                          className="img-fluid"
                        />
                      </a>
                    </div>
                  </Col>
                ))}
              </Row>
            </SRLWrapper>
          </SimpleReactLightbox>
        </Container>
      </div>
    </>
  );
};

export default Gallery;
