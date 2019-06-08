// Libraries
import React, { useState } from 'react'
import styled from 'styled-components'
import Carousel, { Modal, ModalGateway } from 'react-images'
import marked from 'marked'

// Components
import Layout from '../components/Layout'
import Top from '../components/Top'
import Footer from '../components/Footer'

// Helpers
import { formatMoney } from '../utils/money'

// Garage
const GaragePage = ({ pageContext: garage }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [selectedImage, setSelectedImage] = useState(0)

  const garageImages = [{ src: garage.coverImage }]
  garage.images.map(image => garageImages.push({ src: image }))

  const ModalCarousel = () => (
    <ModalGateway>
      {modalIsOpen ? (
        <Modal onClose={() => setModalIsOpen(false)}>
          <Carousel
            currentIndex={selectedImage}
            views={garageImages} />
        </Modal>
      ) : null}
    </ModalGateway>
  )

  return (
    <Layout>
      <ModalCarousel />

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
                  <Value>{garage.area}m²</Value>
                  <Label>Pind</Label>
                </Info>
                { garage.rentPrice &&
                  <Info>
                    <Value>{formatMoney(garage.rentPrice)} €</Value>
                    <Label>Rendi Hind</Label>
                  </Info>
                }
                { garage.sellPrice &&
                  <Info>
                    <Value>{formatMoney(garage.sellPrice)} €</Value>
                    <Label>Müügi Hind</Label>
                  </Info>
                }
              </InfoGroup>
            </Dark>
            <Description dangerouslySetInnerHTML={{__html: marked(garage.description)}} />
          </Main>

          <Images>
            <MainImage
              src={garage.coverImage}
              onClick={() => garage.images ? ( setModalIsOpen(true), setSelectedImage(0) ) : null} />
            <SmallImages>
              { garage.images &&
                garage.images.map((imageUrl, index) =>
                  <Image
                    src={imageUrl}
                    onClick={() => garage.images ? ( setModalIsOpen(true), setSelectedImage(index + 1) ) : null} />
                )
              }
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
  max-width: 864px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 700px) {
    align-items: flex-start;
    flex-direction: row;
  }
`

const Main = styled.div`
  width: 100%;

  @media screen and (min-width: 700px) {
    width: 60%;
  }
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

  strong { font-weight: bold; }
  ul, ol {
    margin: 16px 0;
    list-style: disc;
  }

`

const Images = styled.div`
  width: 80%;

@media screen and (min-width: 700px) {
  width: 40%;
}
`

const MainImage = styled.img`
  width: 100%;
  height: auto;
  display: block;

  &:hover {
    cursor: pointer;
    transform: scale(1.05);
    transition: transform 100ms ease;
  }
`

const SmallImages = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  /* background-color: ${p => p.theme.yellow500}; */
`

const Image = styled.img`
  width: 33.33%;
  height: 100px;
  display: block;
  object-fit: cover;

  &:hover {
    cursor: pointer;
    transform: scale(1.05);
    transition: transform 100ms ease;
  }
`

export default GaragePage