// Libraries
import React from 'react'
import styled from 'styled-components'

// Icons
// import GithubIcon from '../svgs/github.svg'

// Layout
const Top = () => (
  <Center>
    <Name>Garaazid.ee</Name>
    <Nav>
      <span>+372 <strong>56 214 956</strong></span>
      <a>Phone</a>
      <a>Facebook</a>
    </Nav>
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

const Name = styled.div`
  font-weight: 600;
  font-size: 24px;
  letter-spacing: -1px;
`

const Nav = styled.nav`
  display: flex;
  align-items: center;
`

export default Top