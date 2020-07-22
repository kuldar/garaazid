// Libraries
import React from 'react'
import styled from 'styled-components'

// Features
const Features = () => (
  <Row>
    <Column>
      <Title>Sobiva garaaži leidmine</Title>
      <Description>Pakun enda koostööpartnerite ja turul olevatest garaažidest teie kriteeriumitele sobiliku garaaži</Description>
    </Column>
    <Column>
      <Title>Garaažide turvaline müük</Title>
      <Description>Koostan lepingu, mis kaitseb maksimaalselt teie huve. Panen paika müügistrateegia ning nõustan garaaži ettevalmistusega.</Description>
    </Column>
    <Column>
      <Title>Garaažide renoveerimine</Title>
      <Description>Katus laseb läbi? Uksed tahavad vahetust või garaaž vajab värskendamist? Leiame sobiva lahenduse!</Description>
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