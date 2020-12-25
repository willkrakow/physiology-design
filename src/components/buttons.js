import styled from 'styled-components'
import { Nav, Button } from 'react-bootstrap'

export const FancyLink = styled(Nav.Link).attrs(props => ({
  className: "text-warning",
}))`
  transition: 0.3s;
  text-decoration: none;
  display: inline-block;
  font-size: 1.5rem;
  &:hover {
    box-shadow: inset 0 -4px #F04848;
  }
`

export const FancyButton = styled(Button).attrs(props => ({
  className: "btn-lg btn-outline-warning btn",
}))`
  display: block;
  width: max-content;
  @media (max-width: 590px) {
    margin: 1em auto;
  }
  &:hover {
    color: #fffbfa;
  }
`

export const SecondaryButton = styled(FancyButton).attrs(props => ({
  className: "btn-outline-warning btn-lg",
}))`
`


export const HeroButton = styled(Button).attrs(props => ({
  className: "btn-lg btn-light text-danger fw-bold m-5 mt-0",
}))``

export const LinkWrapper = styled.div`
  transition: 0.3s;
  box-shadow: ${props => (props.active ? "inset 0 -4px #F04848" : null)};
  &:hover {
    box-shadow: inset 0 -4px #f04848;
  }
`
