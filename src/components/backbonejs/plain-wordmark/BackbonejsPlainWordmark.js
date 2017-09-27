
import React from 'react'
import PropTypes from 'prop-types'
import SVGInline from 'react-svg-inline'
import iconSVG from './BackbonejsPlainWordmark.svg'
import { normalizeUnit } from '../../utils.js'

/** BackbonejsPlainWordmark */
function BackbonejsPlainWordmark({width, height}) {
  return (
     <SVGInline
      classSuffix="-devicon"
      className="BackbonejsPlainWordmark"
      svg={iconSVG}
      width={normalizeUnit(width)}
      height={normalizeUnit(height)}
    />
  )
}

BackbonejsPlainWordmark.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default BackbonejsPlainWordmark
