
import React from 'react'
import PropTypes from 'prop-types'
import SVGInline from 'react-svg-inline'
import iconSVG from './YiiOriginalWordmark.svg'
import { normalizeUnit } from '../../utils.js'

/** YiiOriginalWordmark */
function YiiOriginalWordmark({width, height}) {
  return (
     <SVGInline
      classSuffix="-devicon"
      className="YiiOriginalWordmark"
      svg={iconSVG}
      width={normalizeUnit(width)}
      height={normalizeUnit(height)}
    />
  )
}

YiiOriginalWordmark.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default YiiOriginalWordmark
