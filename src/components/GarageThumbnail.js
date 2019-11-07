// Libraries
import React from 'react'
import { StaticQuery } from 'gatsby'
import Img from 'gatsby-image'

// Garage Images
const query = graphql`
  query {
    bigImages: allImageSharp { edges { node { fluid(maxWidth: 700) { ...GatsbyImageSharpFluid originalName }}}}
    images: allImageSharp { edges { node { fluid(maxWidth: 250) { ...GatsbyImageSharpFluid originalName }}}}
  }
`

const GarageThumbnail = ({ src, isMain = false, ...props }) => {
  const imageName = src.substr(src.lastIndexOf('/') + 1)
  return (
    <StaticQuery
      query={query}
      render={({
        bigImages: { edges: bigImages },
        images: { edges: images }
      }) => {
        const searchSet = isMain ? bigImages : images
        const image = searchSet.find(({ node: { fluid: { originalName }}}) => originalName === imageName)
        if (!image) { return null }
        return <Img fluid={image.node.fluid} sizes={image.sizes} {...props} />
      }}
    />
  )
}

export default GarageThumbnail