import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Styled from 'styled-components'
import Layout from '../components/layout'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRunning, faWeight, faBalanceScale, faMedal } from '@fortawesome/free-solid-svg-icons'
import { FancyHeader, FancySubheader } from '../components/typography'
import { Link } from 'gatsby'

const GoalIcon = Styled(FontAwesomeIcon)`
    display: block;
    margin: auto;
    transition: transform 0.3s;
`

const GoalCol = Styled(Col)`
    border: 0.25em solid rgba(0,0,0,0.0);
    border-radius: 1em;
&:hover {
    border: 0.25em solid #ffc107;
}
`

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
              <GoalCol xs={10} md={6} key={index} className="my-5">
                  <Link to={`/goals${goal.handle}`}>
                <GoalIcon
                  icon={goal.icon}
                  size={"10x"}
                  className="text-warning p-2"
                />
                <FancySubheader className="text-center mt-2 mx-0">
                  {goal.name}
                </FancySubheader>
                </Link>
              </GoalCol>
            ))}
          </Row>
        </Container>
      </Layout>
    )
}
    
export default PlansStrategies
