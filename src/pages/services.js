import React from 'react'
import Layout from '../components/layout'
import { FancyHeader, FancySubheader, SectionText } from '../components/typography'
import { faClipboard, faChartLine, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Row, Col, Container } from 'react-bootstrap'
import { OverlayContainer } from '../components/containers'
import { FancyLink } from '../components/buttons'


export default function Services() {
    const services = [
      {
        name: "Testing Services",
        handle: "/tests",
        description:
          "We offer lab quality testing, brought to you! Our mobile lab will help you figure out your strengths and weaknesses. All tests can be repeated as many times as you want to track progress!",
        icon: faChartLine,
      },
      {
        name: "Coaching Services",
        handle: "/coaching",
        description:
          "While testing is our forte and we love working with coaches, we are happy to provide coaching services that incorporate our testing and implementation of our findings.",
        icon: faClipboard,
      },
    ]
    return (
      <Layout>
        <OverlayContainer
          fluid
          image={
            "https://images.pexels.com/photos/260409/pexels-photo-260409.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
          }
        >
          <Row className="justify-content-center">
            <Col xs={12} md={8} className="text-center">
              <FancyHeader className="text-start text-md-center d-block my-5">
                We are testing specialists
              </FancyHeader>
              <FancySubheader className="text-start text-md-center">
                We consider ourselves to be experts in metabolic testing and
                interpretation. We primarily want to offer testing services and
                compliment your current coaching or training plan. If you are
                interested in coaching, we will offer these services as well.
                Find out more information by following the links below.
              </FancySubheader>
            </Col>
          </Row>
        </OverlayContainer>
        <Container>
          {services.map((service, index) => (
            <Row
              key={index}
              className="justify-content-center align-items-center w-75 mx-auto"
            >
              <Col xs={12} md={3}>
                <FontAwesomeIcon
                  icon={service.icon}
                  className="text-warning m-auto d-block"
                  size={"10x"}
                />
              </Col>
              <Col xs={12} md={9} className="my-5">
                <FancySubheader className="text-dark m-0 mb-3">
                  {service.name}
                </FancySubheader>
                <SectionText>{service.description}</SectionText>
                <FancyLink to={service.handle}>
                  Learn more{" "}
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="text-warning"
                  />
                </FancyLink>
              </Col>
            </Row>
          ))}
        </Container>
      </Layout>
    )
}
