import React from 'react'
import {Image, Col, Row, Container} from 'react-bootstrap';
import OwlCarousel from "react-owl-carousel2";
import "react-owl-carousel2/src/owl.carousel.css";
import "react-owl-carousel2/src/owl.theme.default.css";
import img1 from '../../../images/projects/project-1.png'
import img2 from '../../../images/projects/project-2.png'
import img3 from '../../../images/projects/project-3.png'


const AllProjects = () => {
  const associations = [
    {
      id: 1,
      imgurl: img1,
      alt: "Prestige Zindal City",
      title: "Prestige Zindal City",
    },
    {
      id: 2,
      imgurl: img2,
      alt: "L&T Raintree Boulevard ",
      title: "L&T Raintree Boulevard",
    },
    {
      id: 3,
      imgurl: img3,
      alt: "Shapoorji Pallonji Park West",
      title: "Shapoorji Pallonji Park West",
    },
    {
      id: 4,
      imgurl: img3,
      alt: "Prestige Royal Garden",
      title:"Prestige Royal Garden",
    },
    {
      id: 5,
      imgurl: img3,
      alt: "Prestige Willow Tree",
      title:"Prestige Willow Tree",
    },
    
    {
      id: 6,
      imgurl: img2,
      alt: "Sobha Dream Acres",
      title:"Sobha Dream Acres",
    },
    {
      id: 7,
      imgurl: img1,
      alt: "Prestige Willow Tree",
      title:"Prestige Willow Tree",
    },
    
    {
      id: 8,
      imgurl: img2,
      alt: "Sobha Dream Acres",
      title:"Sobha Dream Acres",
    },
    {
      id: 9,
      imgurl: img3,
      alt: "Sobha Royal Pavilion",
      title:"Sobha Royal Pavilion",
    },
    
    {
      id: 10,
      imgurl: img1,
      alt: "Sobha Sentosa",
      title:"Sobha Sentosa",
    },
    
    {
      id: 11,
      imgurl: img2,
      alt: "Sobha Victoria Park",
      title:"Sobha Victoria Park",
    },
    {
      id: 12,
      imgurl: img3,
      alt: "Brigade Euthopia",
      title: "Brigade Euthopia",
          },
    
    {
      id: 13,
      imgurl: img1,
      alt: "Brigade Eldorado",
      title:"Brigade Eldorado",
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
                    <h6 className="text-center text-white">{item.title}</h6>
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

export default AllProjects