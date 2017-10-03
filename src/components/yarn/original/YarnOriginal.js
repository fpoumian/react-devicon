
import React from 'react'
import PropTypes from 'prop-types'
import SVGInline from 'react-svg-inline'
import iconSVG from './YarnOriginal.svg'
import { normalizeUnit } from '../../utils.js'

/** YarnOriginal */
function YarnOriginal({width, height}) {
  return (
     <SVGInline
      classSuffix="-devicon"
      className="YarnOriginal"
      svg={iconSVG}
      width={normalizeUnit(width)}
      height={normalizeUnit(height)}
    />
  )
}

YarnOriginal.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default YarnOriginal
