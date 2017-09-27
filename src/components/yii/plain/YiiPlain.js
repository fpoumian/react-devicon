
import React from 'react'
import PropTypes from 'prop-types'
import SVGInline from 'react-svg-inline'
import iconSVG from './YiiPlain.svg'
import { normalizeUnit } from '../../utils.js'

/** YiiPlain */
function YiiPlain({width, height}) {
  return (
     <SVGInline
      classSuffix="-devicon"
      className="YiiPlain"
      svg={iconSVG}
      width={normalizeUnit(width)}
      height={normalizeUnit(height)}
    />
  )
}

YiiPlain.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default YiiPlain
