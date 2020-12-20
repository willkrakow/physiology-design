import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Button, Col, Row } from "react-bootstrap"
import Styled from 'styled-components'
import { FancyHeader, FancySubheader, SectionText, SectionTitle } from '../components/typography'
import { FancyContainer } from '../components/containers'

const FancyWrapper = Styled.div`
width: 50%;
@media (max-width: 590px) {
  width: 100%;
}
`

const FancyButton = Styled(Button)`
background-color: #ffc107;
color: #1b1804;
margin: 0.25em;
margin-top: 1em;
@media (max-width: 590px) {
    margin: 1em auto;
    display: block;
  }
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <FancyContainer
      fluid
      image={
        "https://images.pexels.com/photos/207779/pexels-photo-207779.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
      }
    >
      <FancyWrapper>
        <FancyHeader>Metabolic Test Specialists</FancyHeader>
        <FancySubheader>Affordable | Mobile | Fast</FancySubheader>
        <FancyButton className="btn-warning btn-lg">Start today</FancyButton>
      </FancyWrapper>
    </FancyContainer>
    <FancyContainer fluid className="text-left" height={"auto"}>
      <SectionTitle>We are a mobile physiology service</SectionTitle>
      <SectionText>
        We are exercise physiologists with lots of experience with exercise
        testing under our belts. We want to bring high-end science to you and
        your training. Typically, these services are expensive, and you might
        get tested a few times. We want to dramatically bring down the cost so
        you can get repeated testing done and monitor your fitness.
      </SectionText>
      <Row>
        <Col xs={12}></Col>
        <Col xs={12}></Col>
        <Col xs={12}></Col>
      </Row>
    </FancyContainer>
  </Layout>
)

export default IndexPage
