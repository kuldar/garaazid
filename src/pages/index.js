// Libraries
import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'

// Components
import Layout from '../components/Layout'
import Top from '../components/Top'
import Form from '../components/Form'
import Features from '../components/Features'
import GarageRow from '../components/GarageRow'
// import Filters from '../components/Filters'
import Footer from '../components/Footer'

// Home
const HomePage = ({ data: { allGaragesYaml: { nodes: garages } } }) => {
  return (
    <Layout>
      <Header>
        <Top />
        <Hero>Garaažide <em>ost</em>, <em>müük</em> ja <em>rent</em> üle Eesti</Hero>
        <Form />
      </Header>
      <Features />
      <Garages>
        {/* <Filters /> */}
        {/* <Title>2 Garaaži</Title> */}
        { garages.map(garage => <GarageRow garage={garage} />) }
      </Garages>
      <Footer />
    </Layout>
  )
}

const Header = styled.div`
  padding: 40px 0 64px 0;
  background-color: ${p => p.theme.gray900};
  background-image: url('/garage.jpg');
  background-size: cover;
  background-position: center top;
  box-shadow: inset 0 -104px 0 ${p => p.theme.gray100};
`

const Hero = styled.div`
  margin: 80px auto;
  max-width: 600px;
  font-weight: 700;
  font-size: 56px;
  line-height: 64px;
  letter-spacing: -1px;
  text-align: center;
  color: ${p => p.theme.white};

  em {
    padding: 0 6px;
    color: ${p => p.theme.gray900};
    background-color: ${p => p.theme.yellow500};
  }
`

const Garages = styled.div`
  width: 832px;
  margin: 64px auto 0 auto;
  background-color: ${p => p.theme.white};
  box-shadow: ${p => p.theme.cardShadow};
`

// const Title = styled.div`
//   font-size: 16px;
//   line-height: 16px;
//   font-weight: 700;
//   text-transform: uppercase;
//   color: ${p => p.theme.gray500};
//   padding: 16px;
//   text-align: center;
// `

export const pageQuery = graphql`
  query {
    allGaragesYaml {
      nodes {
        id
        address
        rentPrice
        sellPrice
        area
        description
        shortDescription
      }
    }
  }
`

export default HomePage