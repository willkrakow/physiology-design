import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container, Button, Col, Row } from "react-bootstrap"
import Styled from 'styled-components'

const FancyHeader = Styled.h1`
  color: #fffef9;
  margin-bottom: -1em;
  box-shadow: inset 0 -0.5em 0 rgb(212 189 37 / 0.6);
  font-size: 4.0em;
  display: inline;
  @media (max-width: 590px) {
    text-align: center;
  }
`

const SectionTitle = Styled.h2.attrs(props => ({
  className: props.className || "text-dark",
}))`
  display: inline-block;
  width: 100%;
  font-size: 2em;
  text-align: center;
`
const SectionText = Styled.p.attrs(props => ({
  className: props.className || "text-secondary"
}))`
display: inline-block;
width: 100%;
font-size: 1.5em;
font-weight: 300;
`

const FancyContainer = Styled(Container)`
  background: url(${props => props.image ? props.image : `#1b1804`});
  background-size: cover;
  height: ${props => props.height ? props.height : `auto`};
  padding: 2.5em;
  display: flex;
  background-position: bottom;
  justify-content: flex-end;
  align-items: center;
  flex-wrap: wrap;
  @media (max-width: 590px){
    height: auto;
    padding: 1.5em;
    justify-content: center;
    text-align: ${props => props.textAlign || "center"};
  }
`
const FancySubheader = Styled.h3`
font-size: 2em;
display: inline-block;
color: #fffef9;
font-weight: 300;
margin: 0.25em;
width: 100%;
letter-spacing: 5px;
@media (max-width: 590px) {
    text-align: center;
  }
`

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
      height={"80vh"}
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
    <FancyContainer fluid textAlign={"left"}>
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
