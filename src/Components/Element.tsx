import React, { PropsWithChildren } from 'react'
import { ElementProps } from '../types'

const Element = ({
  type,
  duration,
  direction,
  iteration,
  timing,
  fillMode,
  delay,
  children,
}: PropsWithChildren<ElementProps>) => {
  return (
    <div
      style={{
        margin: 0,
        padding: 0,
        animationName: type,
        animationDuration: `${duration || '1s'}`,
        animationTimingFunction: `${timing || 'ease'}`,
        animationDelay: `${delay || '0s'}`,
        animationIterationCount: `${iteration || 'infinite'}`,
        animationDirection: `${direction || 'alternate'}`,
        animationFillMode: `${fillMode || 'forwards'}`,
      }}
    >
      {children}
    </div>
  )
}

export default Element
