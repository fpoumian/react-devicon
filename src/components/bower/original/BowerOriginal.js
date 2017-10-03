
import React from 'react'
import PropTypes from 'prop-types'
import SVGInline from 'react-svg-inline'
import iconSVG from './BowerOriginal.svg'
import { normalizeUnit } from '../../utils.js'

/** BowerOriginal */
function BowerOriginal({width, height}) {
  return (
     <SVGInline
      classSuffix="-devicon"
      className="BowerOriginal"
      svg={iconSVG}
      width={normalizeUnit(width)}
      height={normalizeUnit(height)}
    />
  )
}

BowerOriginal.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default BowerOriginal
