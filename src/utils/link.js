import React from "react"
import GatsbyLink from "gatsby-link"
import PropTypes from "prop-types"

const Link = (props) => {
  if (
    props.to.indexOf("//") === -1 &&
    props.to.indexOf("mailto:") === -1 &&
    props.to.indexOf("tel:") === -1
  ) {
    return <GatsbyLink {...props}>{props.children}</GatsbyLink>
  }

  return (
    <a
      {...props}
      href={props.to}
      target="_blank"
      rel="nofollow noopener noreferrer"
    >
      {props.children}
    </a>
  )
}

Link.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

export default Link
