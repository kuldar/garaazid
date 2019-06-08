// Libraries
import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

// Assets
import Logo from '../svgs/logo.svg'
import Phone from '../svgs/phone.svg'
import Facebook from '../svgs/facebook.svg'

// Layout
const Top = () => (
  <Center>
    <Link to='/'><Logo /></Link>
    <Contact>
      <PhoneNumber>+372 <strong>56 214 956</strong></PhoneNumber>
      <Phone />
      {/* <FacebookLink href="#"><Facebook /></FacebookLink> */}
    </Contact>
  </Center>
)

const Center = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1032px;
  margin: 0 auto;
  padding: 0 16px;
  color: ${p => p.theme.white};
`

const Contact = styled.div`
  display: flex;
  align-items: center;
`

const PhoneNumber = styled.div`
  font-size: 20px;
  line-height: 20px;
  margin-right: 16px;
  font-weight: 400;
  strong { font-weight: 700; }
`

const FacebookLink = styled.a`
  transition: transform 100ms ease;
  margin-left: 16px;

  svg { display: block; }
  &:hover { transform: scale(1.25); }
`

export default Top