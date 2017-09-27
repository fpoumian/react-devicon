
import React from 'react'
import PropTypes from 'prop-types'
import SVGInline from 'react-svg-inline'
import iconSVG from './AppceleratorPlainWordmark.svg'
import { normalizeUnit } from '../../utils.js'

/** AppceleratorPlainWordmark */
function AppceleratorPlainWordmark({width, height}) {
  return (
     <SVGInline
      classSuffix="-devicon"
      className="AppceleratorPlainWordmark"
      svg={iconSVG}
      width={normalizeUnit(width)}
      height={normalizeUnit(height)}
    />
  )
}

AppceleratorPlainWordmark.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default AppceleratorPlainWordmark
