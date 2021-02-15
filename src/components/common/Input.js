import React from "react"

import PropTypes from "prop-types"

import "./Input.scss"

const Input = (props) => {
  switch (props.type) {
    case "text":
    case "email":
    case "number":
    case "password":
    case "search":
    case "color":
    case "tel":
    case "url":
      return <input className="input" type={props.type} {...props} />
    case "range":
      return <input className="input" type={props.type} {...props} />
    case "date":
    case "datetime-local":
      return <input className="input" type={props.type} {...props} />
    case "file":
      return <input className="input" type={props.type} {...props} />
    case "check":
    case "radio":
      return (
        <label htmlFor={props.id}>
          {props.label}
          <input className="input" type={props.type} {...props} />
        </label>
      )
    case "textarea":
      return <textarea {...props} />
    case "submit":
    case "reset":
      return <textarea {...props} />
    default:
      return null
  }
}

Input.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
}

export default Input
