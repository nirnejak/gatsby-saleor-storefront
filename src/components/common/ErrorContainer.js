import React from "react"

import PropTypes from "prop-types"

import Link from "./Link"

import "./ErrorContainer.scss"

const ErrorContainer = ({ description, title }) => {
  return (
    <section className="error-container">
      <div className="error-container__content">
        <h1>{title}</h1>
        <p>{description}</p>
        <Link to="/" className="btn">
          Back home
        </Link>
      </div>
    </section>
  )
}

ErrorContainer.propTypes = {
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default ErrorContainer
