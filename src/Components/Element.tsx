import React from 'react'
import { ElementProps } from '../types'

const Element = (props: ElementProps) => {
  const {
    children,
    type,
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
        animationName: type,
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
