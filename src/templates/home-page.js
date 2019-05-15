// Libraries
import React, { useState } from 'react'
import styled from 'styled-components'

// Components
import Layout from '../components/Layout'
import Top from '../components/Top'
import List from '../components/List'
import Footer from '../components/Footer'

// Home
const HomePage = () => {
  return (
    <Layout>
      <Header>
        <Top />
        <div>Garaažide ost, müük ja rent üle Eesti</div>
      </Header>
      <List />
      <Footer />
    </Layout>
  )
}

const Header = styled.div`
  padding: 40px 0 0 0;
  background: ${p => p.theme.purple};
  @media screen and (min-width: 850px) { padding: 64px 0 0 0; }
`

export default HomePage