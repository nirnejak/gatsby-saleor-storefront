import React from "react"

import PropTypes from "prop-types"

import "./Button.scss"

const Button = (props) => (
  <button className="button" {...props}>
    {props.children}
  </button>
)

Button.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Button
