
import React from 'react'
import PropTypes from 'prop-types'
import SVGInline from 'react-svg-inline'
import iconSVG from './AppleOriginal.svg'
import { normalizeUnit } from '../../utils.js'

/** AppleOriginal */
function AppleOriginal({width, height}) {
  return (
     <SVGInline
      classSuffix="-devicon"
      className="AppleOriginal"
      svg={iconSVG}
      width={normalizeUnit(width)}
      height={normalizeUnit(height)}
    />
  )
}

AppleOriginal.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default AppleOriginal
