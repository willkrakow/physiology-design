import React from 'react'
import { FancyHeader, SectionText, SectionSubtitle, FancySubheader } from '../components/typography'
import { Row, Col, Container } from 'react-bootstrap'
import Layout from '../components/layout'
// import { graphql } from 'gatsby'
// import Img from 'gatsby-image'


export default function People({ data }) {
    const person_data = [
        {
            name: "Kerry Martin, M.A.",
            title: "Founder and CEO",
            education: [
                {
                    title: "Ph. D. Candidate, Exercise Physiology",
                    school: "UNC-Greensboro",
                },
                {
                    title: "M.A. Exercise Physiology",
                    school: "UNC-Chapel Hill",
                },
                {
                    title: "B.S. Health and Exercise Science",
                    school: "Wake Forest University"
                }
            ],
            description: `Kerry is currently a Ph.D. candidate in Exercise Physiology. He has studied a wide range of topics, including biomechanics, mathematical modeling of physiology, and cell-based research.

He is also a multisport endurance athlete in his spare time, competing in triathlons, bike races, running races, and generally enjoying the outdoors.

As founder and owner, Kerry is happy to start Physiology Design, as he has realized a need to fill a void in science-based training for non-professional athletes.`,
            image_src: "gatsy-astronaut.png",
        }
    ]
    return (
      <Layout className="bg-dark">
        <Container fluid className="bg-dark py-5">
          <Row className="justify-content-center bg-dark">
            <Col xs={12} md={6} className="text-center">
              <FancyHeader className="text-center d-block my-5 text-center">
                People
              </FancyHeader>
            </Col>
          </Row>
          {person_data.map((person, index) => (
            <Row className="w-75 mx-auto" key={index}>
              <Col xs={12} md={4}>
                <p>Image will go here</p>
              </Col>
              <Col xs={12} md={8}>
          <FancySubheader className="text-light text-left">{person.name}</FancySubheader>
          <SectionSubtitle className="text-warning">{person.title}</SectionSubtitle>
          <SectionText className="text-light">{person.description}</SectionText>
              </Col>
            </Row>
          ))}
        </Container>
      </Layout>
    )
}

