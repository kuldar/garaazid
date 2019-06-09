// Libraries
import React, { useState } from 'react'
import styled from 'styled-components'
import Carousel, { Modal, ModalGateway } from 'react-images'
import marked from 'marked'
import { Helmet } from 'react-helmet'
import { StaticQuery, useStaticQuery } from 'gatsby'

// Components
import Layout from '../components/Layout'
import Top from '../components/Top'
import Bio from '../components/Bio'
import GarageThumbnail from '../components/GarageThumbnail'
import Footer from '../components/Footer'

// Helpers
import { formatMoney } from '../utils/money'
import { siteName, siteUrl } from '../utils/variables'

// Garage Images
const getModalGarageImages = (garageSourceImages) => {
  const garageImages = []
  const data = useStaticQuery(graphql`
    query { allImageSharp { edges { node { fluid(maxWidth: 1200) {
      ...GatsbyImageSharpFluid
      originalName
    }}}}}
  `)

  const modalImages = data.allImageSharp.edges

  garageSourceImages.map(image => {
    const resizedImage = modalImages.find(({ node: { fluid: { originalName } }}) => originalName === image)
    // console.log({ resizedImage })
    resizedImage && garageImages.push({ src: resizedImage.node.fluid.src })
  })

  return garageImages
}

// Garage
const GaragePage = ({ pageContext: garage }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [selectedImage, setSelectedImage] = useState(0)

  const garageSourceImages = [garage.coverImage.substr(garage.coverImage.lastIndexOf('/') + 1)]
  garage.images.map(image => garageSourceImages.push(image.substr(image.lastIndexOf('/') + 1)))

  const garageImages = getModalGarageImages(garageSourceImages)
  console.log({ garageImages })

  const pageUrl = siteUrl + '/' + garage.id
  const pageTitle = garage.address + ' - ' + siteName

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
      <Helmet>
        <html lang='et' />
        <title>{pageTitle}</title>
        <meta name="description" content={garage.shortDescription} />
        <link rel='canonical' href={pageUrl} />
        <meta name='viewport' content='width=device-width,initial-scale=1,shrink-to-fit=no,viewport-fit=cover' />
        <meta property='og:url' content={pageUrl} />
        <meta property='og:type' content='website' />
        <meta property='og:locale' content='et' />
        <meta property='og:title' content={pageTitle} />
        <meta property='og:description' content={garage.shortDescription} />
        <meta property='og:site_name' content={pageTitle} />
        <meta property='og:image' content={garage.coverImage} />
        <meta property='og:image:width' content='1012' />
        <meta property='og:image:height' content='506' />
        <meta name='twitter:card' content='summary_large_image' />
      </Helmet>
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
            <MainImageContainer onClick={() => garage.images ? ( setModalIsOpen(true), setSelectedImage(0) ) : null}>
              <MainImage
                isMain={true}
                src={garage.coverImage} />
            </MainImageContainer>
            <SmallImages>
              { garage.images &&
                garage.images.map((imageUrl, index) =>
                  <ImageContainer onClick={() => garage.images ? ( setModalIsOpen(true), setSelectedImage(index + 1) ) : null}>
                    <Image src={imageUrl} />
                  </ImageContainer>
                )
              }
            </SmallImages>
          </Images>

        </Container>
      </Border>
      <Bio />
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
  margin-bottom: 40px;
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

const MainImageContainer = styled.div``

const MainImage = styled(GarageThumbnail)`
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

const ImageContainer = styled.div`
  width: 33.33%;
  height: 100px;
`

const Image = styled(GarageThumbnail)`
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;

  &:hover {
    cursor: pointer;
    transform: scale(1.05);
    transition: transform 100ms ease;
  }
`

export default GaragePage