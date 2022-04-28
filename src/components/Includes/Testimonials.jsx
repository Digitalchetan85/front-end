import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import OwlCarousel from "react-owl-carousel2";
import "react-owl-carousel2/src/owl.carousel.css";
import "react-owl-carousel2/src/owl.theme.default.css";

const Testimonials = () => {
  const associations = [
    {
      id: 1,
    },
    {
      id: 2,
    },
    {
      id: 3,
    },
    {
      id: 4,
    },
  ];

  const options = {
    rewind: true,
    dots: false,
    autoplay: true,
    navText: ["<i class='fas fa-angle-left'></i>","<i class='fas fa-angle-right'></i>"],
    responsive: {
      0: {
        items: 1,
        dots: true,
        nav:true,
      },
      600: {
        items: 1,
        nav: false,
        dots: true,
      },
      1000: {
        items: 1,
        nav: true,
        loop: true,
      },
    },
  };

  return (
    <div id="All-projects" className="">
      <Container>
        <h2 className="pt-2 pb-2 text-center text-primary">Testimonials</h2>
        <OwlCarousel options={options}>
          {associations.map((item, index) => (
            <div className="p-2" key={index}>
              <Row className="g-3 justify-content-center">
                <Col md={10}>
                  <div className="text-center">
                    <p className="lh-lg">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Praesent est nibh, congue consectetur consectetur ut,
                      finibus quis diam. Sed sagittis porta nisi, eu sagittis
                      magna scelerisque quis. Nam libero libero, malesuada eget
                      sapien quis, bibendum fringilla nulla. Nullam rhoncus nibh
                      quis nibh tempor malesuada. Etiam ac ante mollis, accumsan
                      augue ut, maximus eros. Quisque lobortis porttitor sem.
                      Cras sagittis odio ipsum, nec lobortis sapien posuere
                      eget. Nulla aliquam ultricies nulla, eu pulvinar urna
                      malesuada ut. In eleifend a arcu eu rhoncus. Vestibulum
                      dolor massa, viverra scelerisque sapien in, pulvinar
                      auctor ligula. Donec a nisl et purus dictum accumsan non
                      vitae ante.
                    </p>
                    <p className="text-center text-white">- pulvinar auctor ligula</p>
                  </div>
                </Col>
              </Row>
            </div>
          ))}
        </OwlCarousel>
      </Container>
    </div>
  );
};

export default Testimonials;
