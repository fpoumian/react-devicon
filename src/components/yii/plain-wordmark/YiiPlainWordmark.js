
import React from 'react'
import PropTypes from 'prop-types'
import SVGInline from 'react-svg-inline'
import iconSVG from './YiiPlainWordmark.svg'
import { normalizeUnit } from '../../utils.js'

/** YiiPlainWordmark */
function YiiPlainWordmark({width, height}) {
  return (
     <SVGInline
      classSuffix="-devicon"
      className="YiiPlainWordmark"
      svg={iconSVG}
      width={normalizeUnit(width)}
      height={normalizeUnit(height)}
    />
  )
}

YiiPlainWordmark.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default YiiPlainWordmark
