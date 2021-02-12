import React from "react"

import ErrorContainer from "../components/ErrorContainer"
import Footer from "../components/footer"
import Header from "../components/header"
import SEO from "../components/seo.js"

const NotFoundPage = () => (
  <>
    <SEO title="404: Not found" />
    <Header />
    <ErrorContainer
      title="Not Found"
      description="You just hit a route that doesn't exist... the sadness."
    />
    <Footer />
  </>
)

export default NotFoundPage
