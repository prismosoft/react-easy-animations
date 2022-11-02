import { DetailedHTMLProps, HTMLAttributes } from 'react'

interface Props {
  type: string
}

export interface AnimationProps extends Props {
  duration?: string
  delay?: string
  direction?: string
  timing?: string
  iteration?: string
  fillMode?: string
}

export type ElementProps = DetailedHTMLProps<AnimationProps & HTMLAttributes<any>, any>

export interface TyperProps extends DetailedHTMLProps<HTMLAttributes<any>, any> {
  heading?: string
  dataText: string[]
  cursorColor?: string
}

export type AnyElementType = ElementProps | TyperProps
