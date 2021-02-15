import React from "react"

import PropTypes from "prop-types"

import "./Modal.scss"

const Modal = (props) => {
  return (
    <div className="modal">
      {props.title && <div className="modal__header">{props.title}</div>}
      <div className="modal__body">{props.children}</div>
      {props.footer && <div className="modal__footer">{props.footer}</div>}
    </div>
  )
}

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  footer: PropTypes.string,
  title: PropTypes.string,
}

export default Modal
