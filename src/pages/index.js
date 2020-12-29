import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Col, Row, Container } from "react-bootstrap"
import {
  HeroHeader,
  SectionText,
  SectionTitle,
  FancyHeader,
} from "../components/typography"
import Running from "../images/running.svg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faBus,
  faArrowRight,
  faRunning,
  faBiking,
  faWeight,
} from "@fortawesome/free-solid-svg-icons"
import { HeroButton, FancyLink } from "../components/buttons"
import styled from "styled-components"
import { Heartbeat } from "../components/animations"
import { Link } from "gatsby"
import { ArrowContainer } from "../components/containers"

const Circle = styled.div`
  position: relative;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  overflow: hidden;
  background: transparent;
  display: inline-block;
`

const CircleImage = styled.img`
  width: 150px;
  height: auto;
`

// const BlobBackground = styled(Blob)`
// position: absolute;
// top: -50%;
// left: -50%;
// width: 200%;
// height: 200%;
// transform: rotate(${props => props.rotation * 60}deg);
// `
const BlobWrapper = styled.span`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`

const data = [
  {
    name: "Julia",
    image:
      "https://images.pexels.com/photos/5119214/pexels-photo-5119214.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    icon: faRunning,
    testimonial: "I improved my 5k time by 30 minutes in just 2 weeks!",
  },
  {
    name: "Harry",
    image:
      "https://images.pexels.com/photos/1933873/pexels-photo-1933873.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    icon: faBiking,
    testimonial: "I learned how to ride a bike! Wow!",
  },
  {
    name: "Sebastian",
    image:
      "https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    icon: faWeight,
    testimonial: "So many gains. So swoll. So litty broski.",
  },
  {
    name: "Merideth",
    image:
      "https://images.pexels.com/photos/2811087/pexels-photo-2811087.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    icon: faBiking,
    testimonial: "I love this so much. Feeling great to be me!",
  },
]

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Container fluid className="bg-gradient-orange py-5">
        <Row className="align-items-start align-items-md-center">
          <Col xs={12} md={6}>
            <HeroHeader>
              Your training.
              <br />
              Your body.
              <br />
              <span className="text-info">Optimized.</span>
            </HeroHeader>
            <HeroButton>Start today</HeroButton>
          </Col>
          <Col xs={12} md={6}>
            <Running className="w-100 h-100" />
          </Col>
        </Row>
      </Container>
      <ArrowContainer fluid className="pb-5">
        <Row className="justify-content-center p-1 p-md-5">
          <Col xs={12} md={6} className="text-start text-md-center">
            <SectionTitle className="text-start text-md-center text-light">
              We are a mobile physiology service
            </SectionTitle>
            <SectionText className="text-start text-md-center mb-5 text-muted d-block m-auto">
              We are exercise physiologists with lots of experience with
              exercise testing under our belts. We want to bring high-end
              science to you and your training. Typically, these services are
              expensive, and you might get tested a few times. We want to
              dramatically bring down the cost so you can get repeated testing
              done and monitor your fitness.
            </SectionText>
            <FancyLink to="/people">
              Learn more{" "}
              <FontAwesomeIcon icon={faArrowRight} className="text-warning" />
            </FancyLink>
          </Col>
        </Row>
      </ArrowContainer>
      <Container className="py-5">
        <Row>
          {[0, 1, 2].map((col, index) => (
            <Col xs={12} md={4} className="text-center" key={index}>
              <BlobWrapper className="my-5">
                <FontAwesomeIcon
                  icon={faBus}
                  className="text-warning"
                  size={"8x"}
                />
              </BlobWrapper>
              <SectionTitle className="text-dark">Mobile</SectionTitle>
              <SectionText>
                We'll come to you. No matter where you are (both figuratively
                and literally).
              </SectionText>
            </Col>
          ))}
        </Row>
      </Container>
      <Container className="py-5">
        <Row className="my-5">
          <Col xs={12} md={6}>
            <SectionTitle>We're the best. Period.</SectionTitle>
            <SectionText>
              And we're committed to doing everything we can to make you thrive
              in competition (or just in your weekly throwdown ride. Whatever
              floats your boat).
            </SectionText>
            <FancyLink as={Link} to="/services">
              Learn more{" "}
              <FontAwesomeIcon icon={faArrowRight} className="text-warning" />
            </FancyLink>
          </Col>
          <Col
            xs={12}
            md={6}
            className="d-flex justify-content-center align-items-center"
          >
            <Heartbeat />
          </Col>
        </Row>
      </Container>
      <Container className="py-5">
        <Row className="my-5">
          <Col
            xs={12}
            md={6}
            className="d-flex justify-content-center align-items-center"
          >
          </Col>
          <Col xs={12} md={6}>
            <SectionTitle>We're the best. Period.</SectionTitle>
            <SectionText>
              And we're committed to doing everything we can to make you thrive
              in competition (or just in your weekly throwdown ride. Whatever
              floats your boat).
            </SectionText>
            <FancyLink as={Link} to="/services">
              Learn more{" "}
              <FontAwesomeIcon icon={faArrowRight} className="text-warning" />
            </FancyLink>
          </Col>
        </Row>
      </Container>
      <Container className="py-5">
        <Row className="py-5 justify-content-center">
          <Col xs={12} className="text-center">
            <FancyHeader className="text-dark">
              Testimonials
            </FancyHeader>
          </Col>
          {data.map((client, index) => (
            <Col
              xs={12}
              md={3}
              className="d-flex flex-wrap flex-column align-items-center my-5"
            >
              <Circle>
                <CircleImage src={client.image} alt="Client Testimonial" />
              </Circle>
              <SectionTitle className="text-center py-3">
                {client.name}
              </SectionTitle>
              <FontAwesomeIcon
                icon={client.icon}
                className="text-warning text-center"
                size={"2x"}
              />
              <SectionText className="text-center p-4 fst-italic">{`"${client.testimonial}"`}</SectionText>
            </Col>
          ))}
        </Row>
      </Container>
    </Layout>
  )
}

export default IndexPage
