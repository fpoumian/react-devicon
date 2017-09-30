import React from 'react'
import PropTypes from 'prop-types'
import SVGInline from 'react-svg-inline'
import iconSVG from './PycharmOriginal.svg'
import { normalizeUnit } from '../../utils.js'

/** PycharmOriginal */
function PycharmOriginal({ width, height }) {
  return (
    <SVGInline
      classSuffix="-devicon"
      className="PycharmOriginal"
      svg={iconSVG}
      width={normalizeUnit(width)}
      height={normalizeUnit(height)}
    />
  )
}

PycharmOriginal.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default PycharmOriginal
