
import React from 'react'
import PropTypes from 'prop-types'
import SVGInline from 'react-svg-inline'
import iconSVG from './ApacheLineWordmark.svg'
import { normalizeUnit } from '../../utils.js'

/** ApacheLineWordmark */
function ApacheLineWordmark({width, height}) {
  return (
     <SVGInline
      classSuffix="-devicon"
      className="ApacheLineWordmark"
      svg={iconSVG}
      width={normalizeUnit(width)}
      height={normalizeUnit(height)}
    />
  )
}

ApacheLineWordmark.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default ApacheLineWordmark
