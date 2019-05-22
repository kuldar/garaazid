// Libraries
import React from 'react'
import styled from 'styled-components'

// Footer
const Footer = () => (
  <Container>
    <Name>Garaazid.ee</Name>
    <Number>+372 <strong>56 214 956</strong></Number>
  </Container>
)

// Styles
const Container = styled.div`
  color: ${p => p.theme.gray500};
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 832px;
  padding: 0 16px;
  margin: 32px auto;
  font-size: 18px;
`

const Name = styled.div`
  font-weight: 700;
`

const Number = styled.div`
  margin-right: 32px;
  strong { font-weight: 700; }
`

export default Footer