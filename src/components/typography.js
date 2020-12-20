import Styled from 'styled-components'

export const FancyHeader = Styled.h1`
  color: #fffef9;
  margin-bottom: -1em;
  box-shadow: inset 0 -0.5em 0 rgb(212 189 37 / 0.6);
  font-size: 4.0em;
  display: inline;
  @media (max-width: 590px) {
    text-align: center;
  }
`

export const FancySubheader = Styled.h3`
font-size: 2em;
display: inline-block;
color: #fffef9;
font-weight: 300;
margin: 0.25em;
width: 100%;
letter-spacing: 5px;
@media (max-width: 590px) {
    text-align: center;
  }
`

export const SectionTitle = Styled.h2.attrs(props => ({
  className: props.className || "text-dark",
}))`
  display: inline-block;
  width: 100%;
  font-size: 2em;
  text-align: center;
`

export const SectionText = Styled.p.attrs(props => ({
  className: props.className || "text-secondary",
}))`
display: inline-block;
width: 100%;
font-size: 1.5em;
font-weight: 300;
`