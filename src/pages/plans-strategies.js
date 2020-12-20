import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Layout from '../components/layout'
import { faRunning, faWeight, faBalanceScale, faMedal } from '@fortawesome/free-solid-svg-icons'
import { FancyHeader } from '../components/typography'
import IconColumn from '../components/iconColumn'


const PlansStrategies = () => {
    const goals = [
      {
        name: "Fitness",
        handle: "/fitness",
        icon: faWeight,
      },
      {
        name: "Performance",
        handle: "/performance",
        icon: faRunning,
      },
      {
        name: "Weight Management",
        handle: "/weight-loss",
        icon: faBalanceScale,
      },
      {
        name: "Competitive Racing",
        handle: "/racing",
        icon: faMedal,
      },
    ]

    return (
      <Layout>
        <Container fluid className="bg-dark">
          <Row className="justify-content-center">
            <Col xs={10} md={6}>
              <FancyHeader className="text-center d-block my-5">What's your goal?</FancyHeader>
            </Col>
          </Row>

          <Row className="justify-content-center w-50 mx-auto">
            {goals.map((goal, index) => (
              <IconColumn name={goal.name} handle={goal.handle} icon={goal.icon} key={index} />
            ))}
          </Row>
        </Container>
      </Layout>
    )
}
    
export default PlansStrategies
