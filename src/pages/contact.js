import React from 'react'
// import Styled from 'styled-components'
import { Container, Form, Col, Row, Button } from 'react-bootstrap'
import Layout from '../components/layout'
import { FancySubheader, FancyHeader } from '../components/typography'


export default function Contact() {
    return (
      <Layout>
        <Container fluid className="bg-dark py-5">
          <Row className="justify-content-center">
            <Col xs={10} md={6}>
              <FancyHeader className="text-center d-block my-5 text-center">
                Let's Chat
              </FancyHeader>
              <FancySubheader className="text-center text-muted">Maybe over beers?</FancySubheader>
            </Col>
          </Row>
          <Row className="justify-content-center p-5">
            <Col xs={6}>
              <Form>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    className="bg-dark"
                    type="email"
                    placeholder="Enter email"
                  />
                  <Form.Text className="text-light">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    className="bg-dark"
                    type="text"
                    placeholder="Your name"
                  />
                </Form.Group>
                <Form.Group controlId="formBasicSubject">
                  <Form.Label>Subject</Form.Label>
                  <Form.Control
                    className="bg-dark"
                    type="text"
                    placeholder={`e.g., "I need help!"`}
                  />
                </Form.Group>
                <Form.Group controlId="formBasicMessage">
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    className="bg-dark"
                    type="textfield"
                    placeholder="What's on your mind?"
                  />
                </Form.Group>
                <Button
                  variant="warning"
                  type="submit"
                  className="mx-auto d-block m-3"
                >
                  Submit
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </Layout>
    )
}