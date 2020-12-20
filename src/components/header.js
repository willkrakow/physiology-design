import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
// import Styled from 'styled-components'
import { Nav, Navbar } from 'react-bootstrap'

const Header = ({ siteTitle }) => (
  <Navbar bg="dark" expand="lg">
    <Navbar.Brand href="#home">Physiology Design</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link as="span">
          <Link className="text-light" to="/">
            Home
          </Link>
        </Nav.Link>
        <Nav.Link as="span">
          <Link className="text-light" to="/page-2">
            Page 2
          </Link>
        </Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
