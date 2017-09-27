
import React from 'react'
import PropTypes from 'prop-types'
import SVGInline from 'react-svg-inline'
import iconSVG from './AppceleratorOriginal.svg'
import { normalizeUnit } from '../../utils.js'

/** AppceleratorOriginal */
function AppceleratorOriginal({width, height}) {
  return (
     <SVGInline
      classSuffix="-devicon"
      className="AppceleratorOriginal"
      svg={iconSVG}
      width={normalizeUnit(width)}
      height={normalizeUnit(height)}
    />
  )
}

AppceleratorOriginal.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default AppceleratorOriginal
