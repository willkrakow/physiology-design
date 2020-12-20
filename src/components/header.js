import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
// import Styled from 'styled-components'
import { Nav, Navbar } from 'react-bootstrap'
import Styled from "styled-components"

const FancyLink = Styled(Nav.Link).attrs(props => ({
  className: "nav-link text-light mx-3",
}))`
  transition: 0.3s;
  &:hover {
    box-shadow: inset 0 -4px #ffc107;
  }
`


const Header = ({ siteTitle }) => (
  <Navbar bg="dark" expand="lg">
    <Navbar.Brand href="#home">Physiology Design</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end px-5" >
      <Nav className="mr-auto">
        <FancyLink as={Link} to="/" >
            Home
        </FancyLink>
        <FancyLink as={Link} to="/services">
            Services
        </FancyLink>
        <FancyLink as={Link} to="/plans-strategies">
          Plans / Strategies
        </FancyLink>
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
