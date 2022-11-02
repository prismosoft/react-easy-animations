import React, { HTMLAttributes, PropsWithChildren } from 'react'
import { AnimationProps } from '../types'
import styled from 'styled-components'
import { animationKeyframes } from '../animation-types'

const StyledElement = styled.div<AnimationProps>`
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

export const Animation = ({
  children,
  ...props
}: PropsWithChildren<AnimationProps & HTMLAttributes<any>>) => {
  return <StyledElement {...props}>{children}</StyledElement>
}
