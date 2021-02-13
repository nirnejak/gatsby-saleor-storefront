import React from "react"
// import { ReactQueryDevtools } from "react-query-devtools"

import PropTypes from "prop-types"

import "../assets/scss/main.scss"

import "./index.scss"

const Layout = ({ children }) => {
  return (
    <main>
      {children}
      {/* <ReactQueryDevtools /> */}
    </main>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
