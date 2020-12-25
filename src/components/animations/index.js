import styled, { keyframes } from 'styled-components'
import React from 'react'

export const flyIn = keyframes`
  0% {
    transform: translateX(-1000px);
  }

  30% {
    transform: translateX(40px) rotate(20deg);
  }

  50% {
    transform: rotate(0deg);
  }

  100% {
    transform: translateX(0px);
  }
`

export const zoomUp = keyframes`
  0% {
    transform: scale(0.1) translateX(20px) translateY(20px);
  }

  25% {
    transform: scale(0.3) translateX(-20px);
  }

  50% {
    transform: scale(0.5) translateY(-20px);
  }

  100% {
    transform: scale(1.0);
  }
`


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
  width: 15vw;
  height: 15vw;
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

const WatchWrapper = styled.div`
position: relative;
left: 0;
top: 0;
width: 250px;
height: 270px;
overflow: hidden;
`

export const OutlineCircle = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: calc(100% - 20px);
  background: transparent;
  border-radius: 50%;
  border: 8px solid rgb(240, 72, 72);
`


const handMovement = keyframes`
0% {
  transform: rotate(0deg);
}

100% {
  transform: rotate(360deg);
}
`

const WatchHand = styled.div`
  position: absolute;
  height: 4px;
  width: 100px;
  top: 165px;
  left: 150px;
  animation: ${props => props.isActive ? handMovement : null} 10s infinite linear;
  transform-origin: bottom right;
  background-color: rgb(240, 72, 72);
`

const TopKnob = styled.div`
  position: absolute;
  top: 0;
  left: 125px;
  width: 50px;
  height: 20px;
  border-top-right-radius: 1em;
  border-top-left-radius: 1em;
  background-color: transparent;
  border: 8px solid rgb(240, 72, 72);
  transform: ${props => props.isActive ? "scaleY(0.5) translateY(4px)" : null };
  transform-origin: bottom center;
  transition: transform 0.2s;
`

// const TickMark = styled.div`
//   position: relative;
//   top: calc(-50% + 5px + ${props => props.tick}vw + 1.5vw);
//   left: calc(-50% - 8px + ${props => props.tick}vw - 3.5vw);
//   width: 1vw;
//   height: 1.5vw;
//   background-color: rgb(240, 72, 72);
//   transform: rotate(calc(${props => props.tick} * 36deg));
// `

// const tickArray = [...new Array(12).keys()]

export const StopWatch = ({isActive}) => (
  <WatchWrapper>
  <OutlineCircle />
  <WatchHand isActive={isActive} />
  <TopKnob isActive={isActive}/>
  {/* {tickArray.map((tick, index) => (
    <TickMark key={index} tick={tick}/>
  ))} */}
  </WatchWrapper>
)