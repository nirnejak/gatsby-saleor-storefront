import React from "react"

import Link from "../utils/link"

import "./ErrorContainer.scss"

const ErrorContainer = () => {
  return (
    <section className="error-container">
      <div className="error-container__content">
        <h1>Not Found</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
        <Link to="/" className="btn">
          Back home
        </Link>
      </div>
    </section>
  )
}

export default ErrorContainer
