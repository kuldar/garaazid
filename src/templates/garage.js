// Libraries
import React from 'react'
import styled, { css } from 'styled-components'

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
      <Border>
        <Container>

          <Main>
            <Dark>
              <Address>{garage.address}</Address>

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
            </Dark>
            <Description>{garage.description}</Description>
          </Main>

          <Images>
            <MainImage src="https://i.imgur.com/vpj2BD3.png" />
            <SmallImages>
              <Image src="https://i.imgur.com/vpj2BD3.png" />
              <Image src="https://i.imgur.com/vpj2BD3.png" />
              <Image src="https://i.imgur.com/vpj2BD3.png" />
              <Image src="https://i.imgur.com/vpj2BD3.png" />
            </SmallImages>
          </Images>

        </Container>
      </Border>
      <Footer />
    </Layout>
  )
}

const Header = styled.div`
  padding: 40px 0;
  background-color: ${p => p.theme.gray900};
`

const Border = styled.div`
  box-shadow: inset 0 120px 0 ${p => p.theme.gray900};
`

const Container = styled.div`
  width: 864px;
  margin: 0 auto;
  display: flex;
`

const Main = styled.div`
  width: 60%;
`

const Dark = styled.div`
  background-color: ${p => p.theme.gray900};
  padding: 0 32px 32px 32px;
`

const Address = styled.div`
  font-weight: 700;
  margin-bottom: 12px;
  font-size: 40px;
  line-height: 40px;
  color: ${p => p.theme.white};
`

const InfoGroup = styled.div`
  display: flex;
  border-top: 1px solid ${p => p.theme.gray700};
  margin-top: 16px;
  padding-top: 16px;
`

const Info = styled.div`
  margin-right: 32px;
`

const Value = styled.div`
  color: ${p => p.theme.white};
  font-weight: 700;
  font-size: 20px;
  line-height: 20px;
  margin-bottom: 8px;
  white-space: nowrap;
`

const Label = styled.div`
  color: ${p => p.theme.gray500};
  font-size: 18px;
  line-height: 18px;
`

const Description = styled.div`
  padding: 32px;
  color: ${p => p.theme.gray900};
  font-size: 18px;
  line-height: 24px;
`

const Images = styled.div`
  width: 40%;
`

const MainImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
`

const SmallImages = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  /* background-color: ${p => p.theme.yellow500}; */
`

const Image = styled.img`
  width: 33.33%;
  height: auto;
  display: block;
`

export default GaragePage