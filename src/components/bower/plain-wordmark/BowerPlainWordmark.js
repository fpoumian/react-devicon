import React from 'react'
import PropTypes from 'prop-types'
import SVGInline from 'react-svg-inline'
import iconSVG from './BowerPlainWordmark.svg'
import { normalizeUnit } from '../../utils.js'

/** BowerPlainWordmark */
function BowerPlainWordmark({ width, height }) {
  return (
    <SVGInline
      classSuffix="-devicon"
      className="BowerPlainWordmark"
      svg={iconSVG}
      width={normalizeUnit(width)}
      height={normalizeUnit(height)}
    />
  )
}

BowerPlainWordmark.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default BowerPlainWordmark
