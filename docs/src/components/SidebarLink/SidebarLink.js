import React from "react"
import Anchor from "grommet/components/Anchor"
import PropTypes from "prop-types"
// import { navigateTo } from "gatsby-link"
import Link from "gatsby-link"

const SidebarLink = ({ route }) => {
  return (
    <Link to={route} activeClassName={"active"}>
      {route}
    </Link>
  )
}

SidebarLink.propTypes = {}
SidebarLink.defaultProps = {}

export default SidebarLink
