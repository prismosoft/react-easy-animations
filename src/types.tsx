import { ReactNode } from 'react'

interface Props {
  type: string
}

export interface AnimationProps extends Props {
  children: JSX.Element & ReactNode
  duration?: string
  delay?: string
  direction?: string
  timing?: string
  iteration?: string
  fillMode?: string
}

export interface TyperProps extends Props {
  heading?: string
  dataText?: string[]
  cursorColor?: string
}
