// Libraries
import React from 'react'
// import { Link } from 'gatsby'
import styled from 'styled-components'

// Assets
import SignatureSvg from '../svgs/signature.svg'

// Layout
const Bio = () => (
  <Center>
    <Card>
      <Image />
      <Main>
        <Quote><strong>Oman 6 aastast kogemust garaažide ostmisel, müümisel ja üürile andmisel.</strong> Selle aja jooksul olen õppinud erinevaid teadmisi ja kogemusi tänu millele saan aidata ära hoida ebameeldivaid üllatusi. Oma töös hindan kõrgelt professionaalsust ja usaldust.</Quote>
        <Footer>
          <div>
            <Name>Ats Asujõe</Name>
            <Email>ats@garaazid.ee</Email>
            <Phone>+372 56 214 956</Phone>
          </div>
          <Signature />
        </Footer>
      </Main>
    </Card>
  </Center>
)

const Center = styled.div`
  padding: 24px;
  background-color: ${p => p.theme.gray900};
  background-image: url('/bio-bg.jpg');
  background-position: center;
  background-size: cover;

  @media screen and (min-width: 832px) {
    padding: 100px 0;
  }
`

const Card = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 832px;
  margin: 0 auto;
  background-color: ${p => p.theme.white};
  box-shadow: ${p => p.theme.cardShadow};

  @media screen and (min-width: 700px) {
    flex-direction: row;
  }
`

const Image = styled.div`
  width: 100%;
  height: 300px;
  background-image: url('/portrait.jpg');
  background-size: cover;
  background-position: center;

  @media screen and (min-width: 700px) {
    width: 30%;
    height: auto;
  }
`

const Main = styled.div`
  width: 100%;
  padding: 40px;

  @media screen and (min-width: 700px) {
    width: 70%;
  }
`

const Quote = styled.div`
  font-size: 20px;
  line-height: 24px;

  strong { font-weight: 700; }
`

const Footer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 32px;

  @media screen and (min-width: 460px) {
    flex-direction: row;
    align-items: flex-end;
  }
`

const Signature = styled(SignatureSvg)`
  color: ${p => p.theme.gray400};
  height: 40px;
  width: auto;
  margin: 32px 0 0 0;

  @media screen and (min-width: 460px) {
    margin: 0;
  }
`

const Name = styled.div`
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  margin-bottom: 16px;
`

const Email = styled.div`
  margin-bottom: 8px;
  font-size: 18px;
`

const Phone = styled.div`
  font-size: 18px;
`

export default Bio