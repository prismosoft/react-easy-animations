import React from 'react'
import { ElementProps } from '../types'
import { animationKeyframes } from '../animation-types'
import styled from 'styled-components'

const StyledElement = styled.div<ElementProps>`
  margin: 0;
  padding: 0;
  animation-name: ${(props) => animationKeyframes[props.type] ?? null};
  animation-duration: ${(props) => props.duration ?? '1s'};
  animation-timing-function: ${(props) => props.timing ?? 'ease'};
  animation-delay: ${(props) => props.delay ?? '0s'};
  animation-iteration-count: ${(props) => props.iteration ?? 'infinite'};
  animation-direction: ${(props) => props.direction ?? 'alternate'};
  animation-fill-mode: ${(props) => props.fillMode ?? 'forwards'};
`

const Element = (props: ElementProps) => {
  return (
    <div as={StyledElement} {...props}>
      {props.children}
    </div>
  )
}

export default Element
