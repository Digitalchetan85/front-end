import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Project1 from "../../images/projects/project-1.png";
import Project2 from "../../images/projects/project-2.png";
import Project3 from "../../images/projects/project-3.png";
import Project4 from "../../images/projects/project-1.png";

const ResidentialProjects = () => {
  return (
    <>
      <div id="top-page" className="py-3 py-md-4 bg-secondary">
        <Container>
          <Row className="justify-content-center">
            <Col md={6}>
              <div className="text-center">
                <h1 className="fst-italic text-primary text-decoration-underline">
                  Residential Projects
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
                <h2 className="py-2 text-primary">L&T Raintree Boulevard</h2>
                <p>
                  L&T Raintree Boulevard is the new residential Apartment
                  project launched in Hebbal, Bellary Road, Bangalore.
                </p>
                <p>
                  The residential enclave L&T Raintree Boulevard Phase 3
                  features the very best in L&T Realty’s luxury living segment.
                  The project offers spacious Apartments with luxurious
                  features.
                </p>
                <p>
                  Beautiful landscapes all around L&T Raintree Boulevard make it
                  more special & Elite.
                </p>
                <p>
                  The builder is guaranteed to bring a quality living experience
                  to the community of Hebbal, Bellary Road, North Bangalore with
                  brilliant architecture and equivalent lifestyle in L&T
                  Raintree Boulevard.
                </p>
                <p>
                  L&T Raintree Boulevard Location has excellent connectivity &
                  it is located at the crux of Hebbal, Bellary Road near
                  existing and upcoming communities & facilities.
                </p>
                <p>
                  Amenities at L&T Raintree Boulevard Phase 3 include a fully
                  equipped clubhouse, landscaped gardens, gymnasium, swimming
                  pool, recreation rooms, outdoor sports courts, children’s play
                  area, party hall, and meticulously planned with utmost
                  importance to state-of-the-art 24/7 securities.
                </p>
                <Link to="/contact" className="btn btn-primary">
                  Contact Us
                </Link>
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
                <h2 className="py-2 text-white">
                  Shapoorji Pallonji Park West
                </h2>
                <p className="text-white">
                  Shapoorji Pallonji ParkWest is the new premium residential
                  Apartment project launched in Binnypet, Mysore Road,
                  Bangalore.
                </p>
                <p className="text-white">
                  The residential enclave Shapoorji Pallonji ParkWest features
                  the very best in Shapoorji Pallonji’s luxury living segment.
                  The project offers spacious Apartments with luxurious
                  features.
                </p>
                <p className="text-white">
                  Beautiful landscapes all around Shapoorji Pallonji ParkWest
                  makes it more special & Elite.
                </p>
                <p className="text-white">
                  The builder is guaranteed to bring a quality living experience
                  to the community of Binnypet, Mysore Road, Central Bangalore
                  with brilliant architecture and an equivalent lifestyle in
                  Shapoorji ParkWest.
                </p>
                <p className="text-white">
                  Shapoorji Pallonji ParkWest Location has excellent
                  connectivity & it is located at the crux of Binnypet, Mysore
                  Road near existing and upcoming communities & facilities.
                </p>
                <p className="text-white">
                  Amenities at Shapoorji Pallonji ParkWest include a fully
                  equipped clubhouse, landscaped gardens, gymnasium, swimming
                  pool, recreation rooms, outdoor sports courts, children’s play
                  area, party hall, and meticulously planned with utmost
                  importance to state-of-the-art 24/7 securities.
                </p>
                <Link to="/contact" className="btn btn-secondary">
                  Contact Us
                </Link>
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
                <h2 className="py-2 text-primary">Prestige Royal Garden</h2>
                <p>
                  Prestige Royale Gardens, is all set to create the new address
                  of North Bangalore.
                </p>
                <p>
                  There is no greater joy than that incomparable feeling of
                  being lord of all you survey. At Prestige Royale Gardens, you
                  will experience this very emotion as you reign in splendor in
                  a home that puts everything you demand at your command.
                </p>
                <p>
                  Located in the pristine environs of Yelahanka, Bangalore,
                  Prestige Royale Gardens promises you a life that is
                  refreshingly bereft of the city’s noise and bustle while being
                  within arm’s length of its many conveniences.
                </p>
                <p>
                  With a fine elevation and all modern-day amenities at your
                  disposal, Royale Gardens offers you a choice between one, two
                  and three bedroom apartments that finely blend impeccable
                  planning and flawless taste together.
                </p>
                <Link to="/contact" className="btn btn-primary">
                  Contact Us
                </Link>
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

      <div id="project-4" className="py-3 py-md-5 bg-primary">
        <Container>
          <Row>
            <Col md={4} className="align-self-center">
              <div className="text-center">
                <Image
                  src={Project4}
                  alt="About Banner"
                  className="img-fluid"
                ></Image>
              </div>
            </Col>
            <Col md={8}>
              <div className="">
                <h2 className="py-2 text-white">Prestige Willow Tree</h2>
                <p className="text-white">
                  Prestige Willow Tree is a new residential Apartment project in
                  Vidyaranyapura, Bangalore.
                </p>
                <p className="text-white">
                  The residential enclave, Willow Tree features the very best in
                  the Prestige Group luxury segment. The project offers spacious
                  Apartments with luxurious features.
                </p>
                <p className="text-white">
                  Beautiful landscapes all around Prestige Willow Tree make it
                  more special & Elite.
                </p>
                <p className="text-white">
                  The builder is guaranteed to bring a quality living experience
                  to the community of Vidyaranyapura with brilliant architecture
                  and an equivalent lifestyle in Willow Tree.
                </p>
                <p className="text-white">
                  Prestige Willow Tree Location has excellent connectivity & it
                  is located at the heart of Vidyaranyapura.
                </p>
                <p className="text-white">
                  Amenities at Prestige Willow Tree include a fully equipped
                  clubhouse, landscaped gardens, gymnasium, swimming pool,
                  recreation rooms, outdoor sports courts, children’s play area,
                  party hall, and meticulously planned with utmost importance to
                  state-of-the-art 24/7 securities.
                </p>
                <Link to="/contact" className="btn btn-secondary">
                  Contact Us
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div id="project-5" className="py-3 py-md-5">
        <Container>
          <Row>
            <Col md={8}>
              <div className="">
                <h2 className="py-2 text-primary">Sobha Dream Acres</h2>
                <p>
                  Sobha Dream Acres is the new residential Apartment project
                  launched in Panathur Road, Varthur, Bangalore.
                </p>
                <p>
                  The residential enclave Sobha Dream Acres features the very
                  best in SOBHA Limited’s luxury living segment. The project
                  offers spacious Apartments with luxurious features.
                </p>
                <p>
                  Beautiful landscapes all around Sobha Dream Acres make it more
                  special & Elite.
                </p>
                <p>
                  The builder is guaranteed to bring a quality living experience
                  to the community of Panathur Road, Varthur, East Bangalore
                  with brilliant architecture and an equivalent lifestyle in
                  Sobha Dream Acres.
                </p>
                <p>
                  Sobha Dream Acres Location has excellent connectivity & it is
                  located at the crux of Panathur Road, Varthur near existing
                  and upcoming communities & facilities.
                </p>
                <p>
                  Amenities at Sobha Dream Acres include a fully equipped
                  clubhouse, landscaped gardens, gymnasium, swimming pool,
                  recreation rooms, outdoor sports courts, children’s play area,
                  party hall, and meticulously planned with utmost importance to
                  state-of-the-art 24/7 securities.
                </p>
                <Link to="/contact" className="btn btn-primary">
                  Contact Us
                </Link>
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

      <div id="project-6" className="py-3 py-md-5 bg-primary">
        <Container>
          <Row>
            <Col md={4} className="align-self-center">
              <div className="text-center">
                <Image
                  src={Project4}
                  alt="About Banner"
                  className="img-fluid"
                ></Image>
              </div>
            </Col>
            <Col md={8}>
              <div className="">
                <h2 className="py-2 text-white">Sobha Royal Pavilion</h2>
                <p className="text-white">
                  Sobha Royal Pavilion is a new residential Apartment project in
                  Hadosiddapura, Sarjapur Road, Bangalore.
                </p>
                <p className="text-white">
                  The residential enclave, Sobha Royal Pavilion features the
                  very best in Sobha Developers luxury segment. The project
                  offers spacious Apartments with luxurious features.
                </p>
                <p className="text-white">
                  Beautiful landscapes all around Sobha Royal Pavilion combined
                  with the successful recreation of the assortment and vividness
                  of Rajasthan’s architectural heritage without compromising the
                  detailing makes it very special & Elite.
                </p>
                <p className="text-white">
                  Royal Pavilion is an Amalgamation of Mughal, colonial and
                  Hindu architecture offering a stunning array of world-class
                  recreational amenities.
                </p>
                <p className="text-white">
                  A regal abode complete with chhatris, jharokhas, jaalis,
                  courtyards, and all the elements of Rajasthani palaces.
                  Colorful marbles and patterns sourced straight from Rajasthan
                  are used to showcase the grandeur and craftsmanship of the
                  time right here at Royal Pavilion.
                </p>
                <p className="text-white">
                  The builder is guaranteed to bring a quality living experience
                  to the community of Hadosiddapura, Sarjapur Road with
                  brilliant architecture and equivalent lifestyle in Sobha Royal
                  Pavilion.
                </p>
                <p className="text-white">
                  Sobha Royal Pavilion Location has excellent connectivity & it
                  is located at the heart of East Bangalore at the crux of
                  Hadosiddapura, Sarjapur Road.
                </p>
                <p className="text-white">
                  Amenities by Sobha at Royal Pavilion include a fully equipped
                  clubhouse, landscaped gardens, gymnasium, swimming pool,
                  recreation rooms, outdoor sports courts, children’s play area,
                  party hall, and meticulously planned with utmost importance to
                  state-of-the-art 24/7 securities.
                </p>
                <Link to="/contact" className="btn btn-secondary">
                  Contact Us
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div id="project-7" className="py-3 py-md-5">
        <Container>
          <Row>
            <Col md={8}>
              <div className="">
                <h2 className="py-2 text-primary">Sobha Sentosa</h2>
                <p>
                  Sobha Sentosa is the brand new residential Apartment project
                  launched in Panathur Road, Balagere near Varthur, Bangalore.
                </p>
                <p>
                  The residential enclave Sobha Sentosa (also known as Sobha
                  Codename Happiness) features the very best in SOBHA Limited’s
                  premium living segment. The project offers spacious 1 & 3BHK
                  Apartments with luxurious features.
                </p>
                <p>
                  The builder is guaranteed to bring a quality living experience
                  to the community of Panathur Road, Varthur, East Bangalore
                  with brilliant architecture and an equivalent lifestyle in
                  Sobha Dream Acres.
                </p>
                <p>
                  Beautiful landscapes, plenty of open spaces, and curated
                  greens along with Balagere near Varthur lake all around Sobha
                  Sentosa make it more special & Elite.
                </p>
                <p>
                  Sobha Sentosa Location has excellent connectivity & it is
                  located at the crux of Panathur Road, Balagere near Varthur
                  near existing and upcoming communities & facilities while
                  being minutes from the business hubs of Bellandur,
                  Marathahalli ORR, Sarjapur Road, HSR Layout, and more.
                </p>
                <p>
                  Some of the Amenities at Sobha Sentosa include a fully
                  equipped clubhouse, landscaped gardens, gymnasium, swimming
                  pool, recreation rooms, outdoor sports courts, co-working
                  spaces, dedicated visitor parking, children’s play area, party
                  hall, and meticulously planned with utmost importance to
                  state-of-the-art 24/7 securities.
                </p>
                <Link to="/contact" className="btn btn-primary">
                  Contact Us
                </Link>
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

      <div id="project-8" className="py-3 py-md-5 bg-primary">
        <Container>
          <Row>
            <Col md={4} className="align-self-center">
              <div className="text-center">
                <Image
                  src={Project4}
                  alt="About Banner"
                  className="img-fluid"
                ></Image>
              </div>
            </Col>
            <Col md={8}>
              <div className="">
                <h2 className="py-2 text-white">Sobha Victoria Park</h2>
                <p className="text-white">
                  Sobha Victoria Park is a new Victorian-style luxury
                  residential Apartments and Row Houses project just off Hennur
                  Main Road, Bangalore.
                </p>
                <p className="text-white">
                  The residential enclave, Sobha Victoria Park features the very
                  best in SOBHA Limited’s luxury segment. The project is based
                  on Victorian-style architecture homes and offers spacious 3
                  BHK Row Houses with private terraces, vast spaces, high
                  ceilings & 2,3 BHK Apartments with luxurious features, and
                  facilities.
                </p>
                <p className="text-white">
                  Beautiful landscapes all around Victoria Park with plenty of
                  open spaces, Victorian-styled homes, and an exclusive
                  community make it more special & Elite.
                </p>
                <p className="text-white">
                  The builder is guaranteed to bring a quality living experience
                  to the community of Hennur Main Road with brilliant
                  Victorian-style inspired architecture and an equivalent
                  lifestyle in Sobha Victoria Park (Sobha Codename Regency
                  Lifestyle).
                </p>
                <p className="text-white">
                  Sobha Victoria Park Location has excellent connectivity & it
                  is located just off Hennur Main Road which has now known as
                  “New Airport Road” and is well known for being close to Outer
                  Ring Road, Manyata Tech Park, Old Madras Road, Bagalur,
                  Thanisandra Road, and many other key locations in North
                  Bangalore.
                </p>
                <p className="text-white">
                  The builder is guaranteed to bring a quality living experience
                  to the community of Hadosiddapura, Sarjapur Road with
                  brilliant architecture and equivalent lifestyle in Sobha Royal
                  Pavilion.
                </p>
                <p className="text-white">
                  Some of the amenities at Victoria Park include a fully
                  equipped clubhouse, landscaped gardens, gymnasium, swimming
                  pool, recreation rooms, outdoor sports courts, children’s play
                  area, amphitheater, party hall, and meticulously planned with
                  utmost importance to state-of-the-art 24/7 securities.
                </p>
                <Link to="/contact" className="btn btn-secondary">
                  Contact Us
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div id="project-9" className="py-3 py-md-5">
        <Container>
          <Row>
            <Col md={8}>
              <div className="">
                <h2 className="py-2 text-primary">Brigade Euthopia</h2>
                <p>
                  Brigade Eutopia is the new residential Apartment project
                  launched in Varthur Road, Bangalore.
                </p>
                <p>
                  The residential enclave Brigade EUtopia Tranquil features the
                  very best in Brigade Group’s luxury living segment. The
                  project offers spacious Apartments with luxurious features.
                  The newest addition is Brigade EUtopia Paradise tower offering
                  Studio, 1,2 BHK apartments from just Rs. 32 Lakhs onwards
                </p>
                <p>
                  Beautiful landscapes all around Brigade EUtopia Paradise make
                  it more special & Elite.
                </p>

                <p>
                  The builder is guaranteed to bring a quality living experience
                  to the community of Varthur Road, East Bangalore with
                  brilliant architecture and an equivalent lifestyle in Brigade
                  EUtopia halcyon.
                </p>
                <p>
                  Brigade EUtopia Paradise Location has excellent connectivity &
                  it is located at the crux of Varthur Road – Balagere Road near
                  existing and upcoming communities & facilities.
                </p>
                <p>
                  Amenities at Brigade Utopia Paradise include a fully equipped
                  clubhouse, landscaped gardens, gymnasium, swimming pool,
                  recreation rooms, outdoor sports courts, children’s play area,
                  party hall, and meticulously planned with utmost importance to
                  state-of-the-art 24/7 securities.
                </p>
                <Link to="/contact" className="btn btn-primary">
                  Contact Us
                </Link>
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

      <div id="project-10" className="py-3 py-md-5 bg-primary">
        <Container>
          <Row>
            <Col md={4} className="align-self-center">
              <div className="text-center">
                <Image
                  src={Project4}
                  alt="About Banner"
                  className="img-fluid"
                ></Image>
              </div>
            </Col>
            <Col md={8}>
              <div className="">
                <h2 className="py-2 text-white">Brigade Eldorado</h2>
                <p className="text-white">
                  Brigade Eldorado is the new residential Apartment project
                  launched in Huvinayakanahalli, Bagalur, Aero Space Park,
                  Bangalore.
                </p>
                <p className="text-white">
                  The residential enclave Brigade Eldorado features the very
                  best in Brigade Group’s luxury living segment. The project
                  offers spacious Apartments with luxurious features.
                </p>
                <p className="text-white">
                  Beautiful landscapes all around Brigade Eldorado make it more
                  special & Elite.
                </p>
                <p className="text-white">
                  The builder is guaranteed to bring a quality living experience
                  to the community of Huvinayakanahalli, Bagalur, North
                  Bangalore with brilliant architecture and equivalent lifestyle
                  in Gallium at Brigade Eldorado.
                </p>
                <p className="text-white">
                  Gallium at Brigade Eldorado Location has excellent
                  connectivity & it is located at the crux of Huvinayakanahalli,
                  Bagalur near existing and upcoming communities & facilities.
                </p>
                <p className="text-white">
                  Amenities at Brigade Eldorado include a fully equipped
                  clubhouse, landscaped gardens, gymnasium, swimming pool,
                  recreation rooms, outdoor sports courts, children’s play area,
                  party hall, and meticulously planned with utmost importance to
                  state-of-the-art 24/7 securities.
                </p>
                <Link to="/contact" className="btn btn-secondary">
                  Contact Us
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div id="project-11" className="py-3 py-md-5">
        <Container>
          <Row>
            <Col md={8}>
              <div className="">
                <h2 className="py-2 text-primary">Prestige Jindal City</h2>
                <p>
                Prestige Jindal City is a new residential Apartment project in Tumkur Road, Bangalore.
                </p>
                <p>
                The residential enclave, Prestige Jindal City features the very best in Prestige Group luxury segment. The project offers spacious Apartments with luxurious features.
                </p>
                <p>
                Beautiful landscapes all around Prestige Jindal City make it more special & Elite.
                </p>

                <p>The builder is guaranteed to bring a quality living experience to the community of Tumkur Road with brilliant architecture and an equivalent lifestyle in Jindal City.</p>
                <p>Prestige Jindal City Location has excellent connectivity & it is located at the heart of Tumkur Road.</p>
                <p>
                Amenities at Prestige Jindal City include a fully equipped clubhouse, landscaped gardens, gymnasium, swimming pool, recreation rooms, outdoor sports courts, children’s play area, party hall, and meticulously planned with utmost importance to state-of-the-art 24/7 securities.
                </p>
                <Link to="/contact" className="btn btn-primary">
                  Contact Us
                </Link>
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

export default ResidentialProjects;
