import Styled from 'styled-components'

export const FancyHeader = Styled.h1.attrs(props => ({
  className: "text-light"
}))`
  box-shadow: inset 0 -0.5em 0 rgb(245 10 10 / 0.6);
  font-size: 4.0em;
  display: inline;
  @media (max-width: 590px) {
    text-align: center;
  }
`

export const FancySubheader = Styled.h3.attrs(props => ({
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

export const SectionTitle = Styled.h2`
  display: inline-block;
  width: 100%;
  font-size: 2.5em;
`

export const SectionSubtitle = Styled.h3`
display: inline-block;
width: 100%;
font-size: 1.75em;
`

export const SectionText = Styled.p.attrs(props => ({
  className: "text-secondary",
}))`
display: inline-block;
width: 100%;
font-size: 1.5em;
font-weight: 300;
`
export const HeroHeader = Styled.h1.attrs(props => ({
  className: "text-light display-1 fw-bold m-5",
}))``
