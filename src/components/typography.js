import styled from 'styled-components'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const BrandLogo = styled.span.attrs(props => ({
  className: "text-warning"
}))`
  font-family: "Pacifico", cursive;
`

export const FancyHeader = styled.h1.attrs(props => ({
  className: "text-light"
}))`
  box-shadow: inset 0 -0.5em 0 rgb(245 10 10 / 0.6);
  font-size: 4.0em;
  display: inline;
  @media (max-width: 590px) {
    text-align: center;
  }
`

export const FancySubheader = styled.h3.attrs(props => ({
  className: "text-light"
}))`
font-size: 2em;
display: inline-block;
font-weight: 300;
width: 100%;
letter-spacing: 5px;
@media (max-width: 590px) {
    text-align: center;
  }
`

export const SectionTitle = styled.h2`
  display: inline-block;
  width: 100%;
  font-size: 2.5em;
`

export const SectionSubtitle = styled.h3`
display: inline-block;
width: 100%;
font-size: 1.75em;
`

export const SectionText = styled.p.attrs(props => ({
  className: "text-secondary",
}))`
display: inline-block;
width: 100%;
font-size: 1.5em;
font-weight: 300;
`
export const HeroHeader = styled.h1.attrs(props => ({
  className: "text-light display-1 fw-bold m-5",
}))``

export const SkewedIcon = styled(FontAwesomeIcon).attrs(props => ({
  transform: "grow-8",
}))`
  transform: skew(10deg, 10deg);
`
