
import React from 'react'
import PropTypes from 'prop-types'
import SVGInline from 'react-svg-inline'
import iconSVG from './RailsPlainWordmark.svg'
import { normalizeUnit } from '../../utils.js'

/** RailsPlainWordmark */
function RailsPlainWordmark({width, height}) {
  return (
     <SVGInline
      classSuffix="-devicon"
      className="RailsPlainWordmark"
      svg={iconSVG}
      width={normalizeUnit(width)}
      height={normalizeUnit(height)}
    />
  )
}

RailsPlainWordmark.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default RailsPlainWordmark
