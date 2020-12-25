import styled from 'styled-components'
import { Container, Row, Col } from 'react-bootstrap'
import PropTypes from 'prop-types'
import React from 'react'
import { FancyHeader, FancySubheader } from './typography'

export const FancyContainer = styled(Container).attrs(props => ({
  className: "py-5"
}))`
  background: ${props => (props.image ? `url(${props.image})` : null)};
  background-size: cover;
  height: ${props => props.height || "80vh"};
  padding: 2.5em;
  display: flex;
  background-position: bottom;
  justify-content: flex-start;
  align-items: center;  
  flex-wrap: wrap;
  @media (max-width: 590px){
    height: auto;
    padding: 1.5em;
    justify-content: center;
    text-align: center;
  }
`
FancyContainer.propTypes = {
    image: PropTypes.string,
    justify: PropTypes.string,
    bgPosition: PropTypes.string,
}

export const OverlayContainer = styled(FancyContainer)`
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
  className: "bg-gradient-orange",
}))`
height: 80vh;
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
    <Col xs={10} md={6}>
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
  clip-path: polygon(0 0, 100% 0, 100% 75%, 50% 100%, 0 75%);
  -webkit-clip-path: polygon(0 0, 100% 0, 100% 74%, 49% 100%, 0 74%);
`
