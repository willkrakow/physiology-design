import { keyframes } from 'styled-components'

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
