import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

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
          name: `viewport`,
          content: `width=device-width, initial-scale=1`,
        },
        {
          name: `keywords`,
          content: `Lorem Ipsum dolor set amet`,
        },
        {
          name: `author`,
          content: site.siteMetadata.author,
        },
        {
          name: `image`,
          content: site.siteMetadata.siteImage,
        },
        {
          name: `description`,
          content: metaDescription,
        },
        {
          name: "application-name",
          content: "Atollon",
        },
        // Schema.org for Google
        {
          itemprop: "name",
          content: site.siteMetadata.title,
        },
        {
          itemprop: "description",
          content: metaDescription,
        },
        {
          itemprop: "description",
          content: site.siteMetadata.siteImage,
        },
        // Open Graph
        {
          property: `og:url`,
          content: url,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:image`,
          content: image || site.siteMetadata.siteImage,
        },
        {
          name: "canonical",
          href: url,
        },
        {
          name: "alternate",
          href: url,
          hreflang: "en",
        },
        {
          name: "alternate",
          href: url,
          hreflang: "x-default",
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
  lang: `en`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  children: PropTypes.node,
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  image: PropTypes.string,
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
