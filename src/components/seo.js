import React from "react"
import { Helmet } from "react-helmet"

import { useStaticQuery, graphql } from "gatsby"

import PropTypes from "prop-types"

function SEO({ children, description, lang, meta, title, image, path }) {
  const { site } = useStaticQuery(query)

  const metaDescription = description || site.siteMetadata.description
  const url = path
    ? `${site.siteMetadata.siteUrl}${path}/`
    : `${site.siteMetadata.siteUrl}/`

  return (
    <Helmet
      htmlAttributes={{ lang }}
      title={title}
      titleTemplate={title}
      meta={[
        {
          content: `width=device-width, initial-scale=1`,
          name: `viewport`,
        },
        {
          content: `Lorem Ipsum dolor set amet`,
          name: `keywords`,
        },
        {
          content: site.siteMetadata.author,
          name: `author`,
        },
        {
          content: site.siteMetadata.siteImage,
          name: `image`,
        },
        {
          content: metaDescription,
          name: `description`,
        },
        {
          content: "Atollon",
          name: "application-name",
        },
        // Schema.org for Google
        {
          content: site.siteMetadata.title,
          itemprop: "name",
        },
        {
          content: metaDescription,
          itemprop: "description",
        },
        {
          content: site.siteMetadata.siteImage,
          itemprop: "description",
        },
        // Open Graph
        {
          content: url,
          property: `og:url`,
        },
        {
          content: title,
          property: `og:title`,
        },
        {
          content: metaDescription,
          property: `og:description`,
        },
        {
          content: `website`,
          property: `og:type`,
        },
        {
          content: image || site.siteMetadata.siteImage,
          property: `og:image`,
        },
        {
          href: url,
          name: "canonical",
        },
        {
          href: url,
          hreflang: "en",
          name: "alternate",
        },
        {
          href: url,
          hreflang: "x-default",
          name: "alternate",
        },
      ].concat(meta)}
    >
      {children}
      <script
        defer
        src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"
      />
    </Helmet>
  )
}

SEO.defaultProps = {
  description: ``,
  lang: `en`,
  meta: [],
}

SEO.propTypes = {
  children: PropTypes.node,
  description: PropTypes.string,
  image: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  path: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        author
        siteUrl
      }
    }
  }
`

export default SEO
