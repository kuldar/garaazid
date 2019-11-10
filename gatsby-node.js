// Libraries
const path = require(`path`)

// Create pages
exports.createPages = ({ graphql, actions }) => {

  const { createPage } = actions
  const garagePageTemplate = path.resolve(`src/templates/garage.js`)

  return graphql(`
    query garagesQuery {
      allGaragesYaml {
        nodes {
          isPublished
          id
          address
          description
          shortDescription
          area
          rentPrice
          sellPrice
          coverImage
          images
        }
      }
    }
  `).then(result => {

    // Check for errrors
    if (result.errors) { throw result.errors }

    // Create garages pages
    result.data.allGaragesYaml.nodes.forEach(garage => {
      if (garage.isPublished) {
        createPage({
          // Path for this page — required
          path: `/${garage.id}`,
          component: garagePageTemplate,
          context: { ...garage }
        })
      }
    })
  })
}