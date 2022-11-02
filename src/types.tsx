import { ReactNode } from 'react'

export interface AnimationProps {
  children: JSX.Element & ReactNode
  type: string
  duration?: string
  delay?: string
  direction?: string
  timing?: string
  iteration?: string
  fillMode?: string
}

export interface TyperProps {
  heading?: string
  dataText?: string[]
  cursorColor?: string
}
