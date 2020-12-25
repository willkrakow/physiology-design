import React, { useState } from 'react'
import { Container, Form, Col, Row, Button } from 'react-bootstrap'
import Layout from '../components/layout'
import { navigate } from 'gatsby'
import { HeaderContainer } from '../components/containers'

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...formState,
      }),
    })
    .then(() => navigate(form.getAttribute('action')))
    .catch((error) => alert(error))
  }

  const [ formState, setFormState ] = useState({});

  const handleChange = (e) => {
    setFormState({...formState, [e.target.name]: e.target.value })
  }

    return (
      <Layout>
        <Container fluid className="bg-dark">
          <HeaderContainer header="Let's chat" subheader="Maybe over some beers?" bg="dark" />
          <Row className="justify-content-center p-5">
            <Col xs={12} md={6}>
              <Form
                method="POST"
                name="contact"
                action="/thanks/"
                onSubmit={handleSubmit}
                data-netlify="true"
                data-netlify-honeypot="bot-field"
              >
                <input type="hidden" name="form-name" value="contact" />
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    onChange={handleChange}
                    className="bg-dark text-light"
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
                    onChange={handleChange}
                    className="bg-dark text-light"
                    type="text"
                    placeholder="Your name"
                  />
                </Form.Group>
                <Form.Group controlId="formBasicSubject">
                  <Form.Label>Subject</Form.Label>
                  <Form.Control
                    onChange={handleChange}
                    className="bg-dark text-light"
                    name="subject"
                    type="text"
                    placeholder={`e.g., "I need help!"`}
                  />
                </Form.Group>
                <Form.Group controlId="formBasicMessage">
                  <Form.Label>Message</Form.Label>
                  <textarea
                    onChange={handleChange}
                    className="bg-dark form-control text-light"
                    placeholder="What's on your mind?"
                    rows="3"
                  ></textarea>
                </Form.Group>
                <Button
                  variant="warning"
                  type="submit"
                  className="mx-auto d-block m-3 text-light"
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