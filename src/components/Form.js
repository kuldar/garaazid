// Libraries
import React from 'react'
import styled from 'styled-components'

// Form
const Form = () => (
  <Container>
    <strong>Soovin</strong>
    <div>Garaaži müüa</div>

    <strong>Lühikirjeldus</strong>
    <div>Paari sõna garaazist..</div>

    <strong>Nimi</strong>
    <div>Mihkel Mutter</div>

    <strong>Email</strong>
    <div>mihkel@mutter.ee</div>

    <strong>Telefon</strong>
    <div>55 555 555</div>

    <div>Saada sõnum</div>
  </Container>
)

// Styles
const Container = styled.div`
  display: flex;
  max-width: 700px;
  padding: 32px;
  background-color: ${p => p.theme.white};
  box-shadow: ${p => p.theme.cardShadow};

  /* @media screen and (min-width: 650px) {} */
`

const Name = styled.div`
  font-weight: 700;
  margin-bottom: 4px;
`

export default Form