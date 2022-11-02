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

export interface TyperProps extends DetailedHTMLProps<Props & HTMLAttributes<any>, any> {
  heading?: string
  dataText?: string[]
  cursorColor?: string
}
