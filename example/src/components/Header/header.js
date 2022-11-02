import React from 'react'
import styled from 'styled-components'
import StyledLink from '../atoms/link'
import ExternalLink from '../atoms/externalLink'

const Header = () => {
  return (
    <NavBar>
      <ForkRibbon href="https://github.com/prismosoft/react-easy-animations" target="_blank">
        <img
          width="149"
          height="149"
          className="attachment-full size-full"
          alt="Fork me on GitHub"
          data-recalc-dims="1"
          src="https://github.blog/wp-content/uploads/2008/12/forkme_right_white_ffffff.png?resize=149%2C149"
        />
      </ForkRibbon>
      <StyledH1>
        <StyledLink color="#ffffff" noTransition={true} to="/react-easy-animations/">
          React-Easy-Animations
        </StyledLink>
      </StyledH1>
      <StyledSubHeader>
        A library for animated texts built with React and CSS Animation.
        <LinkGroupContainer>
          <StyledLink to="/react-easy-animations/example" color="#ffffff" margin="0px 30px">More Examples</StyledLink>
          <ExternalLink href="https://github.com/prismosoft/react-easy-animations/blob/master/README.md" target="_blank" color="#ffffff">Docs</ExternalLink>
        </LinkGroupContainer>
      </StyledSubHeader>
      <InstallInfoBar>
        <code>npm i react-easy-animations</code>
      </InstallInfoBar>
    </NavBar>
  )
}

const NavBar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0;
  width: 100vw;
  height: 190px;
  padding: 20px 100px;
  background-color: ${props => props.theme.colors.primary};
`

const ForkRibbon = styled.a`
  z-index: 1000;
  position: absolute;
  right: 0;
  top:0;
`

const StyledH1 = styled.h1`
  font-size: 2.8rem;
  font-weight: 300;
  letter-spacing: -2px;
  margin: 0;
  color: ${props => props.theme.colors.middle};
`

const StyledSubHeader = styled.h2`
  font-weight: normal;
  font-size: 1rem;
  color: ${props => props.theme.colors.white};
`
const LinkGroupContainer = styled.div`
  display: inline;
  float: right;
`

const InstallInfoBar = styled.div`
  width: 100%;
  margin: 5px 0;
  color: ${props => props.theme.colors.white};
  background-color: ${props => props.theme.colors.secondary};
  border-radius: 0;
  font-size: 1rem;
  padding: 12px 25px;
`

export default Header
