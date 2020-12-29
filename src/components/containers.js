import styled from 'styled-components'
import { Container, Row, Col } from 'react-bootstrap'
import PropTypes from 'prop-types'
import React from 'react'
import {
  FancyHeader,
  FancySubheader,
  SectionTitle,
  SectionText,
} from "./typography"
import moment from "moment"

import { FancyLink } from "./buttons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons"
import { Link } from "gatsby"


export const OverlayContainer = styled(Container)`
    background: url(${props => props.image}) rgba(33,37,41,1.0);
    background-position: top;
    background-blend-mode: overlay;
    background-size: cover;
    justify-content: center;
    height: auto;
`
OverlayContainer.propTypes = {
  image: PropTypes.string,
}

export const Hero = styled(Container).attrs(props => ({
  className: "",
}))`
display: flex;
justify-content: flex-start;
align-items: center;`

export const FancyWrapper = styled.div`
width: 50%;
@media (max-width: 590px) {
  width: 100%;
}
`

export const ImageContainer = styled(Container).attrs(props => ({
  className: "py-5",
  fluid: true,
}))`
  background-image: ${props => (props.bgimage ? `url(${props.bgimage})` : `rgba(0,0,0,0.0)`)};
  background-size: cover;
  background-blend-mode: overlay;
  transition: background-image 0.4s ease-in-out;
`

ImageContainer.propTypes = {
  bgimage: PropTypes.string,
}

export const HeaderContainer = ({header, subheader, bg}) => (
<Container className={`justify-content-center py-5 ${bg === "dark" ? null : "bg-light"}`} height={"auto"}>
  <Row className="justify-content-center">
    <Col xs={12} md={6}>
      <FancyHeader className={`text-center d-block my-5 text-center ${bg === "dark" ? "text-light" : "text-dark"}`}>
      {header}
      </FancyHeader>
      <FancySubheader className="text-center text-muted">
        {subheader}
      </FancySubheader>
    </Col>
  </Row>
</Container>
)

HeaderContainer.propTypes = {
  header: PropTypes.string,
  subheader: PropTypes.string,
  bg: PropTypes.string,
}

export const ArrowContainer = styled(Container).attrs(props => ({
  className: "bg-dark p-4",
}))`
  clip-path: polygon(0 0, 100% 0, 100% 95%, 50% 100%, 0 95%);
  -webkit-clip-path: polygon(0 0, 100% 0, 100% 95%, 50% 100%, 0 95%);
`


export const ArticleListItem = ({ title, date, excerpt, image, slug, ...props }) => {
return (
<Row className="w-100 my-3">
  <Col xs={12} md={3}>
    <SectionText className="text-start text-secondary">
      {moment(date).format("MMMM D")}
    </SectionText>
  </Col>
  <Col xs={12} md={9}>
    <div>
      <SectionTitle className="text-start">
        {title}
      </SectionTitle>
      <SectionText className="text-start">
        {excerpt}
        <strong>
          <span className="text-warning"> | </span>
          <FancyLink
            as={Link}
            to={slug}
          >
            Read more{" "}
            <FontAwesomeIcon
              icon={faLongArrowAltRight}
              className="text-warning"
            />
          </FancyLink>
        </strong>
      </SectionText>
    </div>
  </Col>
</Row>
)}

ArticleListItem.propTypes = {
    title: PropTypes.string,
    date: PropTypes.string,
    excerpt: PropTypes.string,
    image: PropTypes.string,
}
