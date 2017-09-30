import React from 'react'
import PropTypes from 'prop-types'
import SVGInline from 'react-svg-inline'
import iconSVG from './RubymineOriginal.svg'
import { normalizeUnit } from '../../utils.js'

/** RubymineOriginal */
function RubymineOriginal({ width, height }) {
  return (
    <SVGInline
      classSuffix="-devicon"
      className="RubymineOriginal"
      svg={iconSVG}
      width={normalizeUnit(width)}
      height={normalizeUnit(height)}
    />
  )
}

RubymineOriginal.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default RubymineOriginal
