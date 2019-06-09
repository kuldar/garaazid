// Libraries
import React from 'react'
import styled from 'styled-components'

// Footer
const Footer = () => (
  <Container>
    <Name>Garaazid.ee &copy; { new Date().getFullYear() }</Name>
    <Number>+372 <strong>56 214 956</strong></Number>
  </Container>
)

// Styles
const Container = styled.div`
  color: ${p => p.theme.gray500};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  max-width: 832px;
  padding: 0 16px;
  margin: 32px auto;
  font-size: 18px;

  @media screen and (min-width: 550px) {
    flex-direction: row;
  }
`

const Name = styled.div`
  font-weight: 700;
`

const Number = styled.div`
  margin: 16px 0 0 0;
  strong { font-weight: 700; }

  @media screen and (min-width: 550px) {
    margin: 0 32px 0 0;
  }
`

export default Footer