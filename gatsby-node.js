const path = require("path")

const query = `
{
  saleor {
    products(first: 100, channel: "default-channel") {
      edges {
        node {
          id
          slug
        }
      }
    }
    pages(first: 100) {
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

  const { products, pages } = res.data.saleor

  products.edges.forEach((edge) => {
    createPage({
      component: path.resolve("./src/templates/product.js"),
      context: {
        slug: edge.node.slug,
      },
      path: `/product/${edge.node.slug}/`,
    })
  })
  pages.edges.forEach((edge) => {
    createPage({
      component: path.resolve("./src/templates/page.js"),
      context: {
        slug: edge.node.slug,
      },
      path: `/${edge.node.slug}/`,
    })
  })
}
