import React from 'react'
import PropTypes from 'prop-types'
import SVGInline from 'react-svg-inline'
import iconSVG from './DebianOriginal.svg'
import { normalizeUnit } from '../../utils.js'

/** DebianOriginal */
function DebianOriginal({ width, height }) {
  return (
    <SVGInline
      classSuffix="-devicon"
      className="DebianOriginal"
      svg={iconSVG}
      width={normalizeUnit(width)}
      height={normalizeUnit(height)}
    />
  )
}

DebianOriginal.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default DebianOriginal