import React from 'react'
import PropTypes from 'prop-types'
import SVGInline from 'react-svg-inline'
import iconSVG from './PhpstormOriginalWordmark.svg'
import { normalizeUnit } from '../../utils.js'

/** PhpstormOriginalWordmark */
function PhpstormOriginalWordmark({ width, height }) {
  return (
    <SVGInline
      classSuffix="-devicon"
      className="PhpstormOriginalWordmark"
      svg={iconSVG}
      width={normalizeUnit(width)}
      height={normalizeUnit(height)}
    />
  )
}

PhpstormOriginalWordmark.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default PhpstormOriginalWordmark