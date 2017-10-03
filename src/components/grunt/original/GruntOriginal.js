import React from 'react'
import PropTypes from 'prop-types'
import SVGInline from 'react-svg-inline'
import iconSVG from './GruntOriginal.svg'
import { normalizeUnit } from '../../utils.js'

/** GruntOriginal */
function GruntOriginal({ width, height }) {
  return (
    <SVGInline
      classSuffix="-devicon"
      className="GruntOriginal"
      svg={iconSVG}
      width={normalizeUnit(width)}
      height={normalizeUnit(height)}
    />
  )
}

GruntOriginal.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default GruntOriginal
