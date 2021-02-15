import React from "react"

import { graphql } from "gatsby"

import PropTypes from "prop-types"

import SEO from "../components/seo"

const PageTemplate = ({ data }) => {
  const { page } = data.saleor

  return (
    <>
      <SEO title={page.seoTitle} path={page.seoDescription} />
      <h1>{page.title}</h1>
      <section dangerouslySetInnerHTML={{ __html: page.content }} />
    </>
  )
}

export const pageQuery = graphql`
  query PageBySlug($slug: String!) {
    saleor {
      page(slug: $slug) {
        id
        title
        slug
        seoTitle
        seoDescription
        content
        contentJson
        metadata {
          key
          value
        }
      }
    }
  }
`

PageTemplate.propTypes = {
  data: PropTypes.object.isRequired,
}

export default PageTemplate
