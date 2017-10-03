
import React from 'react'
import PropTypes from 'prop-types'
import SVGInline from 'react-svg-inline'
import iconSVG from './BowerLineWordmark.svg'
import { normalizeUnit } from '../../utils.js'

/** BowerLineWordmark */
function BowerLineWordmark({width, height}) {
  return (
     <SVGInline
      classSuffix="-devicon"
      className="BowerLineWordmark"
      svg={iconSVG}
      width={normalizeUnit(width)}
      height={normalizeUnit(height)}
    />
  )
}

BowerLineWordmark.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default BowerLineWordmark
