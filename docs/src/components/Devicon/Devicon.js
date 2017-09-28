import React from "react"
import PropTypes from "prop-types"

const Devicon = ({ IconComponent, componentName, iconName, iconVersion }) => {
  return <IconComponent key={componentName} width={200} height={200} />
}

Devicon.propTypes = {}

export default Devicon
