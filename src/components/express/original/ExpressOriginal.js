
import React from 'react'
import PropTypes from 'prop-types'
import SVGInline from 'react-svg-inline'
import iconSVG from './ExpressOriginal.svg'
import { normalizeUnit } from '../../utils.js'

/** ExpressOriginal */
function ExpressOriginal({width, height}) {
  return (
     <SVGInline
      classSuffix="-devicon"
      className="ExpressOriginal"
      svg={iconSVG}
      width={normalizeUnit(width)}
      height={normalizeUnit(height)}
    />
  )
}

ExpressOriginal.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default ExpressOriginal
