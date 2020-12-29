import styled, { keyframes } from 'styled-components'
import React from 'react'


const Draw = keyframes`
  to {
    stroke-dashoffset: 0;
  }
`

const OuterBeat = keyframes`
    0% {transform: scale(1.2);}
    10% {transform: scale(1.2);}
    50% {transform: scale(1.3);}
    60% {transform: scale(1.25);}
    75% {transform: scale(1.3);}
`

const InnerBeat = keyframes`
    0% {transform: scale(1);}
    10% {transform: scale(1);}
    50% {transform: scale(1.15);}
    60% {transform: scale(1.05);}
    75% {transform: scale(1.2);}
`

const HeartBeatWrapper = styled.div`
  z-index: -2;
  width: 250px;
  height: 250px;
  margin: auto;
  position: absolute;
`

const SvgDraw = styled.svg`
  transform: scale(1.4);
  z-index: 3;
  width: 100%;
  height: 100%;
  position: absolute;
`

const Path = styled.path`
  stroke: #fafafa;
  stroke-width: 4;
  stroke-dasharray: 1000px;
  stroke-dashoffset: 1000px;
  animation: ${Draw} 2.0s infinite forwards normal linear;
  animation-delay: 0.6s;
  position: relative;
`

const InnerCircle = styled.div`
  border-radius: 50%;
  background-color: rgba(209, 28, 28, 0.705);
  z-index: 1;
  width: 100%;
  height: 100%;
  position: relative;
  left: 0;
  top: 0;
  opacity: 0.9;
  animation: ${InnerBeat} 2.0s infinite linear forwards;
`
const OuterCircle = styled.div`
  border-radius: 50%;
  background-color: rgba(230, 92, 92, 0.774);
  box-shadow: 0 0 40px 20px #fff;
  z-index: -1;
  opacity: 0.9;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  transform: scale(1.2);
  animation: ${OuterBeat} 2.0s infinite linear forwards;
`


export const Heartbeat = () => (
  <HeartBeatWrapper>
    <SvgDraw
      width="100%"
      height="100%"
      viewBox="0 0 150 400"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M 0 200 l 40 0 l 5 -40 l 5 40 l 10 0 l 5 15 l 10 -140 l 10 220 l 5 -95 l 10 0 l 5 20 l 5 -20 l 30 0"
        fill="transparent"
        stroke-width="4"
        stroke="black"
      />
    </SvgDraw>
    <InnerCircle />
    <OuterCircle />
  </HeartBeatWrapper>
)
