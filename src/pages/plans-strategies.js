import React, { useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import Layout from '../components/layout'
import { faRunning, faWeight, faBalanceScale, faMedal } from '@fortawesome/free-solid-svg-icons'
import { FancyHeader } from '../components/typography'
import IconColumn from '../components/iconColumn'
import { ImageContainer } from '../components/containers'

const PlansStrategies = () => {
    const goals = [
      {
        name: "Fitness",
        handle: "/fitness",
        icon: faWeight,
        bgImage:
          "https://images.pexels.com/photos/841135/pexels-photo-841135.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      },
      {
        name: "Performance",
        handle: "/performance",
        icon: faRunning,
        bgImage:
          "https://images.pexels.com/photos/936094/pexels-photo-936094.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      },
      {
        name: "Weight Management",
        handle: "/weight-loss",
        icon: faBalanceScale,
        bgImage:
          "https://images.pexels.com/photos/4054850/pexels-photo-4054850.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      },
      {
        name: "Competitive Racing",
        handle: "/racing",
        icon: faMedal,
        bgImage:
          "https://images.pexels.com/photos/248547/pexels-photo-248547.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      },
    ]
    const [ bgImage, setBgImage ] = useState(null);

    return (
      <Layout>
        <ImageContainer fluid className="bg-dark py-5" bgimage={bgImage}>
          <Row className="justify-content-center">
            <Col xs={10} md={6}>
              <FancyHeader className="text-center d-block my-5 text-center">
                What's your goal?
              </FancyHeader>
            </Col>
          </Row>

          <Row className="justify-content-center w-50 mx-auto" onMouseLeave={() => setBgImage(null)}  >
            {goals.map((goal, index) => (
              <Col xs={12} md={6} onMouseEnter={() => setBgImage(goal.bgImage)} key={index}>
                <IconColumn
                  name={goal.name}
                  handle={goal.handle}
                  icon={goal.icon}
                />
              </Col>
            ))}
          </Row>
        </ImageContainer>
      </Layout>
    )
}
    
export default PlansStrategies
