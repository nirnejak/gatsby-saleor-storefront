import React from "react"

import PropTypes from "prop-types"

import "../assets/scss/main.scss"

import "./index.scss"

const Layout = ({ children }) => {
  return <main>{children}</main>
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
