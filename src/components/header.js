import PropTypes from "prop-types"
import React, { useEffect } from "react"
// import Styled from 'styled-components'
import { Nav, Navbar } from 'react-bootstrap'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import styled from "styled-components"
import { StaticQuery, graphql } from 'gatsby'


const LinkWrapper = styled.div`
  transition: 0.3s;
  box-shadow: ${props => (props.active ? "inset 0 -4px #F04848" : null)};
  &:hover {
    box-shadow: inset 0 -4px #f04848;
  }
`
function checkActiveLink(link) {
  if (link === "/") {
    return false
  } else if (typeof window !== "undefined") {
    return window.location.pathname.includes(link)
  } else {
    return false
  }
}

const Header = ({ siteTitle }) => (

  <StaticQuery
    query={graphql`
      query SiteQuery {
        site {
          siteMetadata {
            title
            menuLinks {
              name
              link
            }
          }
        }
      }
    `}
    render={data => (
      <Navbar bg="dark" expand="lg">
        <AniLink to="/">
          <Navbar.Brand className="text-light fw-bold px-3">
            Physiology Design
          </Navbar.Brand>
        </AniLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          id="basic-navbar-nav"
          className="justify-content-end px-5"
        >
          <Nav className="mr-auto">
            {data.site.siteMetadata.menuLinks.map((menuItem, index) => (
              <LinkWrapper
                active={
                  checkActiveLink(menuItem.link)
                }
                key={index}
              >
                <AniLink
                  className="text-light nav-link d-inline-block mx-3"
                  fade
                  to={menuItem.link}
                >
                  {menuItem.name}
                </AniLink>
              </LinkWrapper>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )}
  />
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
