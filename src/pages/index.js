import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Col, Row } from "react-bootstrap"
import { HeroHeader, SectionText, SectionTitle } from '../components/typography'
import { FancyContainer, FancyWrapper, Hero } from '../components/containers'
import Running from '../images/running.svg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faRunning, faBus } from "@fortawesome/free-solid-svg-icons"
import { HeroButton } from '../components/buttons'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero fluid>
      <FancyWrapper>
        <HeroHeader>
          Your training.
          <br />
          Your body.
          <br />
          <span className="text-info">Optimized.</span>
        </HeroHeader>
        <HeroButton>Start today</HeroButton>
      </FancyWrapper>
      <Running />
    </Hero>
    <FancyContainer fluid height={"auto"}>
      <SectionTitle className="text-center">We are a mobile physiology service</SectionTitle>
      <SectionText className="text-center">
        We are exercise physiologists with lots of experience with exercise
        testing under our belts. We want to bring high-end science to you and
        your training. Typically, these services are expensive, and you might
        get tested a few times. We want to dramatically bring down the cost so
        you can get repeated testing done and monitor your fitness.
      </SectionText>
    </FancyContainer>
    <FancyContainer height={"auto"}>
      <Row>
        <Col xs={12} md={4} className="text-center">
          <FontAwesomeIcon icon={faBus} size={"9x"} className="text-info" />
          <SectionTitle className="text-dark">Mobile</SectionTitle>
          <SectionText>
            We'll come to you. No matter where you are (both figuratively and
            literally).
          </SectionText>
        </Col>
        <Col xs={12} md={4} className="text-center">
          <FontAwesomeIcon icon={faRunning} size={"9x"} className="text-info" />
          <SectionTitle className="text-dark">Validated</SectionTitle>
          <SectionText>
            We'll come to you. No matter where you are (both figuratively and
            literally).
          </SectionText>
        </Col>
        <Col xs={12} md={4} className="text-center">
          <FontAwesomeIcon icon={faBus} size={"9x"} className="text-info" />
          <SectionTitle className="text-dark">Mobile</SectionTitle>
          <SectionText>
            We'll come to you. No matter where you are (both figuratively and
            literally).
          </SectionText>
        </Col>
      </Row>
    </FancyContainer>
  </Layout>
)

export default IndexPage
