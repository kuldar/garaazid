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
        <Quote><strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</strong> Nam at mauris ac lorem accumsan pharetra quis at nibh. Integer ultrices purus vitae orci blandit, in mollis elit rutrum. In mollis elit rutrum.</Quote>
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
  padding: 100px 0;
  background-color: ${p => p.theme.gray900};
  background-image: url('/bio-bg.jpg');
  background-position: center;
  background-size: cover;
`

const Card = styled.div`
  display: flex;
  width: 832px;
  margin: 0 auto;
  background-color: ${p => p.theme.white};
  box-shadow: ${p => p.theme.cardShadow};
`

const Image = styled.div`
  width: 30%;
  background-image: url('/portrait.jpg');
  background-size: cover;
  background-position: center;
`

const Main = styled.div`
  width: 70%;
  padding: 40px;
`

const Quote = styled.div`
  font-size: 20px;
  line-height: 24px;

  strong { font-weight: 700; }
`

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: 32px;
`

const Signature = styled(SignatureSvg)`
  color: ${p => p.theme.gray400};
  height: 64px;
  width: auto;
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