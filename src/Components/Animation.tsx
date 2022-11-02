import React from 'react'
import Typer from './Typer'
import Element from './Element'
import { ElementProps, TyperProps } from '../types'

export const Animation = (props: ElementProps & TyperProps) => {
  return props.type === 'typewriter' ? (
    <Typer
      {...props}
      heading={props.heading}
      dataText={props.dataText}
      cursorColor={props.cursorColor}
    />
  ) : (
    <Element {...props}>{props.children}</Element>
  )
}
