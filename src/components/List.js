// Libraries
import React from 'react'
import styled from 'styled-components'
import { transparentize } from 'polished'
import { useStaticQuery, graphql } from 'gatsby'
import Select from 'react-select'

// Icons
// import LocationIcon from '../svgs/location.svg'

// Styles
import theme from '../styles/theme'


// List
const List = () => {

  // const data = useStaticQuery(queries)
  // const orgs = data.allOrgsJson.edges
  // const cities = data.allCitiesJson.edges
  // const countries = data.allCountriesJson.edges

  return (
    <Container>
      <Card>
        <Row>Hi</Row>
      </Card>
    </Container>
  )
}

// Queries
const queries = graphql`
  query {
    allOrgsJson {
      edges {
        node {
          id
          image
          name
          country
          city
          topics
          mainLink
          secondaryLinks {
            name
            url
          }
        }
      }
    }

    allCitiesJson {
      edges {
        node {
          id
          slug
          name
          country
        }
      }
    }

    allCountriesJson {
      edges {
        node {
          id
          slug
          name
        }
      }
    }
  }
`

// Styles
const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
`

const Card = styled.div`
  background: white;
  box-shadow: ${p => p.theme.cardShadow};
`

const Row = styled.div`
  display: flex;
  align-items: top;
  padding: 24px 32px;
  border-bottom: 1px solid ${p => p.theme.lightGray};

  @media screen and (min-width: 650px) {
    align-items: center;
  }
`

export default List