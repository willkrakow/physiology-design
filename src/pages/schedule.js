import React, { useState } from "react"
import { Container, Row, Col, Form, Button } from "react-bootstrap"
import { HeaderContainer } from "../components/containers"
import Layout from "../components/layout"
import { navigate } from "gatsby"
import SEO from "../components/seo"

import DatePicker from "react-datepicker"

import "react-datepicker/dist/react-datepicker.css"

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

const Schedule = () => {
  const [formState, setFormState] = useState({})
  const [ startDate, setStartDate ] = useState(new Date())
  const handleChange = e => {
    setFormState({ ...formState, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...formState, startDate
      }),
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch(error => alert(error))
  }
  return (
    <>
      <SEO title="Schedule an appointment" />
      <Layout>
        <HeaderContainer
          header="Let's make a plan"
          subheader="Choose a time that works for you, and if it works for me, we'll go from there."
        />
        <Container fluid className="bg-dark">
          <Row className="justify-content-center p-5">
            <Col xs={12} md={6}>
              <Form
                method="POST"
                name="schedule"
                action="/thanks/"
                onSubmit={handleSubmit}
                data-netlify="true"
                data-netlify-honeypot="bot-field"
              >
                <input type="hidden" name="form-name" value="schedule" />
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
                <Form.Group as={Row} controlId="formApptType" className="my-3">
                  <Col
                    xs={"2"}
                    className="align-items-center justify-content-end d-flex"
                  >
                    <Form.Check
                      type="radio"
                      name="apptType"
                      value="consult"
                      className="d-inline"
                    />
                  </Col>
                  <Form.Label column xs={"10"} className="text-light">
                    Consultation
                  </Form.Label>
                  <Col
                    xs={"2"}
                    className="align-items-center justify-content-end d-flex"
                  >
                    <Form.Check
                      className="d-inline"
                      type="radio"
                      name="apptType"
                      value="aerobic_testing"
                    />
                  </Col>

                  <Form.Label column xs={"10"} className="text-light">
                    Aerobic testing
                  </Form.Label>
                </Form.Group>
                <Row className="my-3">
                  <Col xs={12}>
                    <DatePicker
                      selected={startDate}
                      onChange={date => setStartDate(date)}
                    />
                  </Col>
                </Row>
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
    </>
  )
}

export default Schedule
