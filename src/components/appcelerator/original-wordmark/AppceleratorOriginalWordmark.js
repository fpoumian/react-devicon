
import React from 'react'
import PropTypes from 'prop-types'
import SVGInline from 'react-svg-inline'
import iconSVG from './AppceleratorOriginalWordmark.svg'
import { normalizeUnit } from '../../utils.js'

/** AppceleratorOriginalWordmark */
function AppceleratorOriginalWordmark({width, height}) {
  return (
     <SVGInline
      classSuffix="-devicon"
      className="AppceleratorOriginalWordmark"
      svg={iconSVG}
      width={normalizeUnit(width)}
      height={normalizeUnit(height)}
    />
  )
}

AppceleratorOriginalWordmark.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default AppceleratorOriginalWordmark
