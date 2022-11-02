import React from 'react'
import styled from 'styled-components'
import { Animation } from 'react-easy-animations'
import ExternalLink from '../atoms/externalLink'
import {theme} from '../../theme'

const Footer = () => {
  return (
    <FooterContainer>
      Made with
      <Animation
        type="pulse"
        iteration="infinite"
        duration="600ms"
        direction="alternate"
        timing="ease-out"
        style={{margin: "0px 10px", fontSize: '20px', color: theme.colors.primary}}
      >
        ❤
      </Animation>
       by <ExternalLink href="https://prismosoft.com" target="_blank" margin="0px 10px" color={theme.colors.primary} ><strong>PrismoSoft</strong></ExternalLink> using React and styled-components
    </FooterContainer>
  )
}

const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 0;
  width: 100vw;
  height: 40px;
  font-size: .8rem;
  color: ${props => props.theme.colors.secondary};
  background: #f4f1fc;
`

export default Footer
