import React, { useState, useEffect, HTMLAttributes } from 'react'
import styled, { keyframes } from 'styled-components'
import { TyperProps } from '../types'

export const Typer = (props: TyperProps & HTMLAttributes<any>) => {
  const { heading = '', dataText = ['Typewriter Animation'], cursorColor = '#cccccc' } = props

  const [text, setText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [loopNum, setLoopNum] = useState(0)
  const [typingSpeed, setTypingSpeed] = useState(150)

  useEffect(() => {
    const timer = setTimeout(() => {
      handleType()
    }, typingSpeed)
    return () => clearTimeout(timer)
  })

  const handleType = () => {
    const i = loopNum % dataText.length
    const fullText = dataText[i]

    setText(
      isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1),
    )
    setTypingSpeed(isDeleting ? 30 : 150)

    if (!isDeleting && text === fullText) {
      setTimeout(() => setIsDeleting(true), 500)
    } else if (isDeleting && text === '') {
      setIsDeleting(false)
      setLoopNum(loopNum + 1)
    }
  }

  return (
    <div {...props}>
      {heading}&nbsp;
      <span>{text}</span>
      <Cursor cursorColor={cursorColor}></Cursor>
    </div>
  )
}

const blink = keyframes`
  50% {
    border-color: transparent;
  }
`

const Cursor = styled.span<TyperProps>`
  margin-left: 2px;
  border-left: 3px solid ${(props) => props.cursorColor};
  animation: ${blink} 0.7s steps(1) infinite;
`
