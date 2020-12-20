import Styled from 'styled-components'
import { Container } from 'react-bootstrap'
import PropTypes from 'prop-types'

export const FancyContainer = Styled(Container)`
  background: ${props => (props.image ? `url(${props.image})` : null)};
  background-size: cover;
  height: ${props => props.height || "80vh"};
  padding: 2.5em;
  display: flex;
  background-position: bottom;
  justify-content: flex-end;
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