// Libraries
import React from 'react'
import styled from 'styled-components'

// Components
import Layout from '../components/Layout'
import Top from '../components/Top'
import GarageRow from '../components/GarageRow'
import Footer from '../components/Footer'

// Garage
const GaragePage = ({ pageContext: garage }) => {
  return (
    <Layout>
      <Header>
        <Top />
      </Header>
      <Card>
        <GarageRow garage={garage} />
      </Card>
      <Footer />
    </Layout>
  )
}

const Header = styled.div`
  padding: 40px 0;
  background-color: ${p => p.theme.gray900};
`

const Card = styled.div`
  width: 832px;
  margin: 64px auto 0 auto;
  background-color: ${p => p.theme.white};
  box-shadow: ${p => p.theme.cardShadow};
`

export default GaragePage