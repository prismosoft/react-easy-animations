import Typer from './Typer'
import Element from './Element'
import { AllElementType } from '../types'
import React, { PropsWithChildren } from 'react'

const AnimationComponent = ({
  children,
  type,
  ...props
}: PropsWithChildren<AllElementType>): JSX.Element => {
  return type === 'typewriter' ? (
    <Typer heading={props.heading} dataText={props.dataText} cursorColor={props.cursorColor} />
  ) : (
    <Element type={type} {...props}>
      {children}
    </Element>
  )
}

export default AnimationComponent
