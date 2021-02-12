import React from "react"

import Link from "../utils/link"

import "./header.scss"

const Header = () => {
  const [isVisible, setIsVisible] = React.useState(false)

  const toggleIsVisible = () => {
    setIsVisible(!isVisible)
  }

  return (
    <>
      <header className="header">
        <div className="header__container">
          <Link to="/" title="Site Name" className="header__logo">
            Site Name
          </Link>
          <nav className="header__nav">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
            </ul>
          </nav>
          <button onClick={toggleIsVisible}>Toggle Menu</button>
        </div>
      </header>
    </>
  )
}

export default Header
