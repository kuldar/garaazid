// Libraries
import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

// Assets
import Logo from '../svgs/logo.svg'
import Phone from '../svgs/phone.svg'
// import Facebook from '../svgs/facebook.svg'

// Handle callout click
const handleCallout = e => {
  e.preventDefault()
  // document.getElementById('type').value = 'hindamine'
  document.getElementById('message').focus()
  document.getElementById('contact').scrollIntoView()
}

// Layout
const Top = () => (
  <Center>
    <Link to='/'><Logo /></Link>
    <Callout href="#" onClick={handleCallout}>Tasuta hindamine!</Callout>
    <Spacer />
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
  flex-direction: column;
  max-width: 1032px;
  margin: 0 auto;
  padding: 0 16px;
  color: ${p => p.theme.white};

  @media screen and (min-width: 600px) {
    flex-direction: row;
  }
`

const Contact = styled.div`
  display: flex;
  align-items: center;
  margin: 16px 0 0 0;

  @media screen and (min-width: 600px) {
    margin: 0;
  }
`

const PhoneNumber = styled.div`
  font-size: 20px;
  line-height: 20px;
  margin-right: 16px;
  font-weight: 400;
  strong { font-weight: 700; }
`

// const FacebookLink = styled.a`
//   transition: transform 100ms ease;
//   margin-left: 16px;

//   svg { display: block; }
//   &:hover { transform: scale(1.25); }
// `

const Callout = styled.a`
  display: none;
  background: ${p => p.theme.yellow500};
  color: ${p => p.theme.black};
  padding: 4px 6px;
  transform: rotate(-2deg);
  margin: 0 16px;
  font-weight: 600;

  &:hover {
    transform: scale(1.1) rotate(-1deg);
  }

  @media screen and (min-width: 600px) {
    display: block;
  }
`

const Spacer = styled.div`
  flex: 1;
`

export default Top