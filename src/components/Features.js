// Libraries
import React from 'react'
import styled from 'styled-components'

// Features
const Features = () => (
  <Row>
    <Column>
      <Title>Tasuta hindamine</Title>
      <Description>Leiame teie objektile konkurentsiväärse turuhinna</Description>
    </Column>
    <Column>
      <Title>Treileri rent</Title>
      <Description>Sed in purus egestas, viverra sem nec, tristique justo. Praesent dignissim, felis euismod.</Description>
    </Column>
    <Column>
      <Title>Valvesüsteemide rent</Title>
      <Description>Vestibulum gravida lorem eu mattis suscipit. Mauris fermentum orci mi, at consectetur odio vehicula.</Description>
    </Column>
  </Row>
)

// Styles
const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  max-width: 1032px;
  margin: 0 auto;
  padding: 0 16px;

  @media screen and (min-width: 700px) {
    flex-direction: row;
  }
`

const Column = styled.div`
  flex: 1;
  margin: 24px;

  @media screen and (min-width: 700px) {
    &:first-child { margin-left: 0; }
    &:last-child { margin-right: 0; }
  }
`

const Title = styled.div`
  font-size: 20px;
  line-height: 20px;
  font-weight: 700;
`

const Description = styled.div`
  margin-top: 16px;
  font-size: 18px;
  line-height: 24px;
  font-weight: 400;
  color: ${p => p.theme.gray600};
`

export default Features