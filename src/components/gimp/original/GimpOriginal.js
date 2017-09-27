
import React from 'react'
import PropTypes from 'prop-types'
import SVGInline from 'react-svg-inline'
import iconSVG from './GimpOriginal.svg'
import { normalizeUnit } from '../../utils.js'

/** GimpOriginal */
function GimpOriginal({width, height}) {
  return (
     <SVGInline
      classSuffix="-devicon"
      className="GimpOriginal"
      svg={iconSVG}
      width={normalizeUnit(width)}
      height={normalizeUnit(height)}
    />
  )
}

GimpOriginal.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default GimpOriginal
