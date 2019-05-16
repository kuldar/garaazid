// Libraries
import React from 'react'
import styled from 'styled-components'

// Components
import Layout from '../components/Layout'
import Top from '../components/Top'
import Form from '../components/Form'
import Features from '../components/Features'
import GarageRow from '../components/GarageRow'
import Footer from '../components/Footer'

const garages = [
  {
    address: "Liivaoja tn 14, Kesklinn, Tallinn",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi at enim rutrum, semper massa.",
    area: 22,
    price: 7500
  },
  {
    address: "Liivaoja tn 14, Kesklinn, Tallinn",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi at enim rutrum, semper massa.",
    area: 22,
    price: 7500
  },
  {
    address: "Liivaoja tn 14, Kesklinn, Tallinn",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi at enim rutrum, semper massa.",
    area: 22,
    price: 7500
  }
]

// Home
const HomePage = () => {
  return (
    <Layout>
      <Header>
        <Top />
        <Hero>Garaažide <em>ost</em>, <em>müük</em> ja <em>rent</em> üle Eesti</Hero>
        <Form />
      </Header>
      <Features />
      <Garages>
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
  padding: 0 16px;
  background-color: ${p => p.theme.white};
  box-shadow: ${p => p.theme.cardShadow};
`

export default HomePage