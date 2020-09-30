/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
//bootstrap.css
import "./bootstrap.min.css"
import "./layout.css"
//icons
import { FaGulp } from 'react-icons/fa'

const Layout = ({ children }) => {
  return(
    <>
      <FaGulp />
      {children}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
