import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header className="header">
    <div className="header__title">
      <h1>
        <Link to="/">{siteTitle}</Link>
      </h1>
    </div>
    <div className="header__links">
      <h1 className="header__link--1">
        <Link to="#">Portfolio</Link>
      </h1>
      <h1 className="header__link--2">
        <Link to="#">Blog</Link>
      </h1>
      <h1 className="header__link--3">
        <Link to="#">Contact</Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
