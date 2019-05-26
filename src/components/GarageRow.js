// Libraries
import React from 'react'
import { Link } from 'gatsby'
import styled, { css } from 'styled-components'

// GarageRow
const GarageRow = ({ garage }) => (
  <Container to={`/${garage.id}`}>
    <Image src="https://i.imgur.com/vpj2BD3.png" />

    <Overview>
      <Main>
        <Address>{garage.address}</Address>
        <Description>{garage.shortDescription}</Description>
      </Main>

      <InfoGroup>
        <Info>
          <Value>{garage.area}m</Value>
          <Label>Pind</Label>
        </Info>
        <Info>
          <Value>{garage.price} €</Value>
          <Label>Hind</Label>
        </Info>
      </InfoGroup>

    </Overview>
  </Container>
)

// Styles
const boldText = css`
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
`

const grayText = css`
  color: ${p => p.theme.gray600};
  font-size: 18px;
  line-height: 24px;
`

const Container = styled(Link)`
  cursor: pointer;
  border-top: 1px solid ${p => p.theme.gray300};
  display: flex;
  padding: 16px;
`

const Image = styled.img`
  flex-shrink: 0;
  display: block;
  width: 200px;
  height: 150px;
  margin-right: 16px;
`

const Overview = styled.div`
  display: flex;
  padding: 16px;
`

const Main = styled.div``

const Address = styled.div`
  ${boldText}
  margin-bottom: 12px;
`
const Description = styled.div`
  ${grayText}
`

const InfoGroup = styled.div`
  display: flex;
`

const Info = styled.div`
  text-align: right;
  margin-left: 32px;
`

const Value = styled.div`
  ${boldText}
  margin-bottom: 12px;
  white-space: nowrap;
`

const Label = styled.div`
  ${grayText}
`

export default GarageRow