import React from 'react'
import PropTypes from 'prop-types'
import SVGInline from 'react-svg-inline'
import iconSVG from './StylusOriginal.svg'
import { normalizeUnit } from '../../utils.js'

/** StylusOriginal */
function StylusOriginal({ width, height }) {
  return (
    <SVGInline
      classSuffix="-devicon"
      className="StylusOriginal"
      svg={iconSVG}
      width={normalizeUnit(width)}
      height={normalizeUnit(height)}
    />
  )
}

StylusOriginal.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default StylusOriginal
