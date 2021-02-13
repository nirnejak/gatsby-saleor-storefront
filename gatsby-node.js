const path = require("path")

const query = `
{
  saleor {
    products(channel: "default-channel") {
      edges {
        node {
          id
          slug
        }
      }
    }
  }
}
`

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const res = await graphql(query)

  res.data.saleor.products.edges.map((edge) => {
    createPage({
      component: path.resolve("./src/templates/product.js"),
      context: {
        id: edge.node.id,
      },
      path: `/product/${edge.node.slug}`,
    })
  })
}
