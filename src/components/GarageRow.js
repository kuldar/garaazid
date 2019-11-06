// Libraries
import React from 'react'
import { Link } from 'gatsby'
import styled, { css } from 'styled-components'
import Img from 'gatsby-image'
import { StaticQuery } from 'gatsby'

// Helpers
import { formatMoney } from '../utils/money'

// GarageRow
const GarageRow = ({ garage }) => (
  <Container to={`/${garage.id}`}>
    <Image src={garage.coverImage} />
    {/* <Image src={garage.coverImage} /> */}
    {/* <Image fluid={garage.coverImage.childImageSharp.fluid} /> */}

    <Overview>
      <Main>
        <Address>{garage.address}</Address>
        <Description>{garage.shortDescription}</Description>
      </Main>

      <InfoGroup>
        { garage.area && (garage.area !== 0) &&
          <Info>
            <Value>{garage.area}m²</Value>
            <Label>Pind</Label>
          </Info>
        }
        { garage.rentPrice && (garage.rentPrice !== 0) &&
          <Info>
            <Value>{formatMoney(garage.rentPrice)} €</Value>
            <Label>Rent</Label>
          </Info>
        }
        { garage.sellPrice && (garage.sellPrice !== 0) &&
          <Info>
            <Value>{formatMoney(garage.sellPrice)} €</Value>
            <Label>Müük</Label>
          </Info>
        }
      </InfoGroup>

    </Overview>
  </Container>
)

// Garage Images
const garageImagesQuery = graphql`
  query {
    allImageSharp { edges { node { fluid(maxWidth: 300) { ...GatsbyImageSharpFluid originalName }}}}
  }
`

const GarageImage = ({ src, ...props }) => {
  const imageName = src.substr(src.lastIndexOf('/') + 1)
  return (
    <StaticQuery
      query={garageImagesQuery}
      render={({ allImageSharp: { edges: images } }) => {
        const image = images.find(({ node: { fluid: { originalName }}}) => originalName === imageName)
        if (!image) { return null }
        return <Img fluid={image.node.fluid} sizes={image.sizes} {...props} />
      }} />
  )
}

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
  display: flex;
  flex-direction: column;
  padding: 16px;

  & + & { border-top: 1px solid ${p => p.theme.gray300}; }
  &:hover { background-color: ${p => p.theme.gray100}; }

  @media screen and (min-width: 550px) {
    flex-direction: row;
  }
`

// const Image = styled(Img)`
const Image = styled(GarageImage)`
  flex-shrink: 0;
  display: block;
  object-fit: cover;
  width: 100%;
  height: 150px;
  margin: 0 0 16px 0;

  @media screen and (min-width: 550px) {
    width: 150px;
    height: 100%;
    margin: 0 16px 0 0;
  }

  @media screen and (min-width: 550px) {
    width: 200px;
  }
`

const Overview = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 16px;

  @media screen and (min-width: 550px) {
    flex-direction: row;
  }
`

const Main = styled.div`
  flex: 1;
`

const Address = styled.div`
  ${boldText}
  margin-bottom: 12px;
`
const Description = styled.div`
  ${grayText}
`

const InfoGroup = styled.div`
  display: flex;
  flex-direction: row;
  margin: 16px 0 0 0;

  @media screen and (min-width: 550px) {
    margin: 0 0 0 16px;
    flex-direction: column;
  }

  @media screen and (min-width: 700px) {
    flex-direction: row;
    margin: 0;
  }
`

const Info = styled.div`
  text-align: left;
  margin: 0 16px 0 0;

  @media screen and (min-width: 550px) {
    text-align: right;
    margin: 0 0 8px 0;
  }

  @media screen and (min-width: 700px) {
    margin: 0 0 0 32px;
  }
`

const Value = styled.div`
  ${boldText}
  margin: 0 0 4px 0;
  white-space: nowrap;

  @media screen and (min-width: 700px) {
    margin: 0 0 12px 0;
  }
`

const Label = styled.div`
  color: ${p => p.theme.gray600};
  font-size: 16px;
  line-height: 20px;
`

export default GarageRow