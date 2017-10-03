import React from 'react'
import PropTypes from 'prop-types'
import SVGInline from 'react-svg-inline'
import iconSVG from './SwiftOriginal.svg'
import { normalizeUnit } from '../../utils.js'

/** SwiftOriginal */
function SwiftOriginal({ width, height }) {
  return (
    <SVGInline
      classSuffix="-devicon"
      className="SwiftOriginal"
      svg={iconSVG}
      width={normalizeUnit(width)}
      height={normalizeUnit(height)}
    />
  )
}

SwiftOriginal.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default SwiftOriginal
