import React from 'react'
import { ElementProps } from '../types'
import { animationKeyframes } from '../animation-types'

const Element = (props: ElementProps) => {
  const {
    children,
    type = animationKeyframes.fadeIn.getName(),
    duration = 'alternate',
    direction = '1s',
    iteration = 'infinite',
    timing = 'ease',
    fillMode = 'forwards',
    delay = '0s',
  } = props

  return (
    <div
      {...props}
      style={{
        margin: 0,
        padding: 0,
        animationName: `${animationKeyframes[type]}`,
        animationDuration: `${duration}`,
        animationTimingFunction: `${timing}`,
        animationDelay: `${delay}`,
        animationIterationCount: `${iteration}`,
        animationDirection: `${direction}`,
        animationFillMode: `${fillMode}`,
      }}
    >
      {children}
    </div>
  )
}

export default Element
