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
      createPage({
        // Path for this page — required
        path: `/${garage.id}`,
        component: garagePageTemplate,
        context: { ...garage }
      })
    })
  })
}

// const { resolve } = require('path')

// // Create pages
// exports.createPages = async ({ graphql, actions: { createPage } }) => {

//   // Garage template
//   // const garageTemplate = path.resolve(`src/templates/garage.js`)

//   const garagesQuery = await graphql`{
//     allGaragesYaml {
//       nodes {
//         id
//         area
//         address
//         price
//       }
//     }
//   }`

//   console.log({ garagesQuery })
//   // const { data: { allGaragesYaml: { nodes: garages } } } = garagesQuery

//   garages.forEach(garage => createPage({
//     path: `${garage.id}`,
//     context: { garage },
//     component: resolve('./src/pages/garage.js')
//   }))
// }

//-------------------

// // Libraries
// const _ = require('lodash')
// const path = require('path')
// const { createFilePath } = require('gatsby-source-filesystem')
// const { fmImagesToRelative } = require('gatsby-remark-relative-images')

// // Create pages
// exports.createPages = ({ actions, graphql }) => {
//   const { createPage } = actions

//   return graphql(`
//     {
//       allMarkdownRemark(limit: 1000) {
//         edges {
//           node {
//             id
//             fields {
//               slug
//             }
//             frontmatter {
//               tags
//               templateKey
//             }
//           }
//         }
//       }
//     }
//   `).then(result => {

//     if (result.errors) {
//       result.errors.forEach(e => console.error(e.toString()))
//       return Promise.reject(result.errors)
//     }

//     const posts = result.data.allMarkdownRemark.edges

//     posts.forEach(edge => {
//       const id = edge.node.id
//       createPage({
//         path: edge.node.fields.slug,
//         tags: edge.node.frontmatter.tags,
//         component: path.resolve(
//           `src/templates/${String(edge.node.frontmatter.templateKey)}.js`
//         ),
//         // additional data can be passed via context
//         context: {
//           id,
//         },
//       })
//     })

//     // Tag pages:
//     let tags = []
//     // Iterate through each post, putting all found tags into `tags`
//     posts.forEach(edge => {
//       if (_.get(edge, `node.frontmatter.tags`)) {
//         tags = tags.concat(edge.node.frontmatter.tags)
//       }
//     })
//     // Eliminate duplicate tags
//     tags = _.uniq(tags)

//     // Make tag pages
//     tags.forEach(tag => {
//       const tagPath = `/tags/${_.kebabCase(tag)}/`

//       createPage({
//         path: tagPath,
//         component: path.resolve(`src/templates/tags.js`),
//         context: {
//           tag,
//         },
//       })
//     })
//   })
// }

// exports.onCreateNode = ({ node, actions, getNode }) => {
//   const { createNodeField } = actions
//   fmImagesToRelative(node) // convert image paths for gatsby images

//   if (node.internal.type === `MarkdownRemark`) {
//     const value = createFilePath({ node, getNode })
//     createNodeField({
//       name: `slug`,
//       node,
//       value,
//     })
//   }
// }