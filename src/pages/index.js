import React from "react"

import Footer from "../components/footer"
import Header from "../components/header"
import SEO from "../components/seo"

const IndexPage = () => {
  return (
    <>
      <SEO title="E-commerce Storefront" path="/" />
      <Header />
      <h1>Index</h1>
      <Footer />
    </>
  )
}

export default IndexPage
