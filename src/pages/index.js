import React from "react"

import SEO from "../components/seo"
import Header from "../components/header"
import Footer from "../components/footer"

const IndexPage = () => {
  return (
    <>
      <SEO title="Site Name" path="/" />
      <Header />
      <h1>Index</h1>
      <Footer />
    </>
  )
}

export default IndexPage
