import React from "react"

import SEO from "../components/seo.js"
import Header from "../components/header"
import Footer from "../components/footer"
import ErrorContainer from "../components/ErrorContainer"

const NotFoundPage = () => (
  <>
    <SEO title="404: Not found" />
    <Header />
    <ErrorContainer />
    <Footer />
  </>
)

export default NotFoundPage
