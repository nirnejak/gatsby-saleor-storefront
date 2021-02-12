import React from "react"

import Link from "../utils/link"

import "./footer.scss"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <Link to="/" title="Site Name" className="footer__logo">
          Site Name
        </Link>
      </div>
    </footer>
  )
}

export default Footer
