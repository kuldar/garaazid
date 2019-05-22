// Libraries
import React from 'react'
import styled from 'styled-components'

// Components
import Layout from '../components/Layout'
import Top from '../components/Top'
import Footer from '../components/Footer'

// Garage
const GaragePage = ({ pageContext: garage }) => {
  return (
    <Layout>
      <Header>
        <Top />
      </Header>
      <div>{garage.address}</div>
      <div>{garage.description}</div>
      <div>{garage.area} m2</div>
      <div>{garage.price} €</div>
      <Footer />
    </Layout>
  )
}

const Header = styled.div`
  padding: 40px 0;
  background-color: ${p => p.theme.gray900};
`

export default GaragePage