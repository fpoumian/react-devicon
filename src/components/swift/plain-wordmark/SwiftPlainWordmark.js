import React from 'react'
import PropTypes from 'prop-types'
import SVGInline from 'react-svg-inline'
import iconSVG from './SwiftPlainWordmark.svg'
import { normalizeUnit } from '../../utils.js'

/** SwiftPlainWordmark */
function SwiftPlainWordmark({ width, height }) {
  return (
    <SVGInline
      classSuffix="-devicon"
      className="SwiftPlainWordmark"
      svg={iconSVG}
      width={normalizeUnit(width)}
      height={normalizeUnit(height)}
    />
  )
}

SwiftPlainWordmark.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default SwiftPlainWordmark
