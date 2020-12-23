import Styled from 'styled-components'
import { Container } from 'react-bootstrap'
import PropTypes from 'prop-types'

export const FancyContainer = Styled(Container).attrs(props => ({
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

export const OverlayContainer = Styled(FancyContainer)`
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

export const Hero = Styled(Container).attrs(props => ({
  className: "bg-gradient-orange",
}))`
height: 80vh;
display: flex;
justify-content: flex-start;
align-items: center;`

export const FancyWrapper = Styled.div`
width: 50%;
@media (max-width: 590px) {
  width: 100%;
}
`

export const ImageContainer = Styled(Container).attrs(props => ({
  className: "py-5 bg-dark",
  fluid: true,
}))`
  background-image: ${props => (props.bgimage ? `url(${props.bgimage})` : `rgba(0,0,0,0.0)`)};
  background-size: cover;
  background-blend-mode: overlay;
  transition: background-image 0.4s ease-in-out;
`
