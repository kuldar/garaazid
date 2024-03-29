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
import Bio from '../components/Bio'
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
      <Bio />
      <Footer />
    </Layout>
  )
}

const Header = styled.div`
  padding: 40px 0 64px 0;
  background-color: ${p => p.theme.gray900};
  background-size: cover;
  background-position: center top;
  box-shadow: inset 0 -104px 0 ${p => p.theme.gray100};
  background-image: none;

  @media screen and (min-width: 700px) {
    background-image: url('/garage.jpg');
  }
`

const Hero = styled.div`
  margin: 40px auto;
  padding: 0 40px;
  max-width: 600px;
  font-weight: 700;
  font-size: 40px;
  line-height: 56px;
  letter-spacing: -1px;
  text-align: center;
  color: ${p => p.theme.white};

  em {
    padding: 0 6px;
    color: ${p => p.theme.gray900};
    background-color: ${p => p.theme.yellow500};
  }

  @media screen and (min-width: 700px) {
    font-size: 56px;
    line-height: 64px;
    margin: 80px auto;
    padding: 0;
  }
`

export const pageQuery = graphql`
  query {
    allGaragesYaml (sort: { fields: createdAt, order: DESC }) {
      nodes {
        isPublished
        id
        address
        rentPrice
        sellPrice
        area
        description
        shortDescription
        coverImage
      }
    }
  }
`

export default HomePage
