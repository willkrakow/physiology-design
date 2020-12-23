import Styled from 'styled-components'
import { Nav, Button } from 'react-bootstrap'

export const FancyLink = Styled(Nav.Link).attrs(props => ({
  className: "text-warning",
}))`
  transition: 0.3s;
  text-decoration: none;
  display: inline-block;
  margin-left: 0.25em;
  &:hover {
    box-shadow: inset 0 -4px #6a018a;
  }
`

export const FancyButton = Styled(Button).attrs(props => ({
  className: "btn btn-lg btn-light text-warning"
}))`
margin: 0.25em;
margin-top: 1em;
@media (max-width: 590px) {
    margin: 1em auto;
    display: block;
}

`

export const SecondaryButton = Styled(FancyButton).attrs(props => ({
  className: "btn-outline-warning btn-lg",
}))`
`


export const HeroButton = Styled(Button).attrs(props => ({
  className: "btn-lg btn-light text-danger fw-bold m-5 mt-0",
}))``

