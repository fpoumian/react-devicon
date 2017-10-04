import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

const SidebarLink = ({ route }) => {
  return (
    <Link to={`/${route}`} activeClassName={'active'}>
      {route}
    </Link>
  )
}

SidebarLink.propTypes = {
  route: PropTypes.string,
}

export default SidebarLink
