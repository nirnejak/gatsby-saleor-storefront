import React from "react"

import { graphql } from "gatsby"

import PropTypes from "prop-types"

import SEO from "../components/seo"

const Product = ({ data }) => {
  const { product } = data.saleor

  return (
    <>
      <SEO title="Product Name" path="products/product-slug" />
      <h1>{product.name}</h1>
    </>
  )
}

export const productQuery = graphql`
  query ProductBySlug($slug: String!) {
    saleor {
      product(slug: $slug) {
        id
        name
        slug
        description
        category {
          name
        }
        variants {
          name
        }
        pricing {
          onSale
          priceRange {
            start {
              net {
                amount
              }
            }
            stop {
              net {
                amount
              }
            }
          }
        }
        thumbnail {
          url
          alt
        }
      }
    }
  }
`

Product.propTypes = {
  data: PropTypes.object.isRequired,
}

export default Product
