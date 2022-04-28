import React from 'react'
import {Image, Col, Row, Container} from 'react-bootstrap';
import OwlCarousel from "react-owl-carousel2";
import "react-owl-carousel2/src/owl.carousel.css";
import "react-owl-carousel2/src/owl.theme.default.css";
import img1 from '../../../images/projects/project-1.png'
import img2 from '../../../images/projects/project-2.png'
import img3 from '../../../images/projects/project-3.png'


const CompletedProjects = () => {
  const associations = [
    {
      id: 1,
      imgurl: img1,
      alt: "",
    },
    {
      id: 2,
      imgurl: img2,
      alt: "",
    },
    {
      id: 3,
      imgurl: img3,
      alt: "",
    },
    {
      id: 4,
      imgurl: img3,
      alt: "",
    },
  ];

  const options = {
    rewind: true,
    dots: true,
    autoplay: true,
    responsive: {
      0: {
        items: 1,
        nav: true,
      },
      600: {
        items: 2,
        nav: false,
      },
      1000: {
        items: 3,
        nav: false,
        loop: false,
      },
    },
  };
  return (
    <div id="All-projects" className="">
      <Container>
        <h2 className="pt-2 pb-2 text-center text-primary">Testimonials</h2>
        <OwlCarousel options={options}>
          {associations.map((item, index) => (
            <div className="border border-primary rounded p-2" key={index}>
              <Row className="g-3">
                <Col md={12}>
                  <div className="text-center">
                    <Image
                      src={item.imgurl}
                      alt={item.alt}
                      className="img-fluid"
                    />
                  </div>
                </Col>
              </Row>
            </div>
          ))}
        </OwlCarousel>
      </Container>
    </div>
  )
}

export default CompletedProjects