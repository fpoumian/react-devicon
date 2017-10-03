
import React from 'react'
import PropTypes from 'prop-types'
import SVGInline from 'react-svg-inline'
import iconSVG from './PycharmOriginalWordmark.svg'
import { normalizeUnit } from '../../utils.js'

/** PycharmOriginalWordmark */
function PycharmOriginalWordmark({width, height}) {
  return (
     <SVGInline
      classSuffix="-devicon"
      className="PycharmOriginalWordmark"
      svg={iconSVG}
      width={normalizeUnit(width)}
      height={normalizeUnit(height)}
    />
  )
}

PycharmOriginalWordmark.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default PycharmOriginalWordmark
