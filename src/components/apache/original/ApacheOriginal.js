
import React from 'react'
import PropTypes from 'prop-types'
import SVGInline from 'react-svg-inline'
import iconSVG from './ApacheOriginal.svg'
import { normalizeUnit } from '../../utils.js'

/** ApacheOriginal */
function ApacheOriginal({width, height}) {
  return (
     <SVGInline
      classSuffix="-devicon"
      className="ApacheOriginal"
      svg={iconSVG}
      width={normalizeUnit(width)}
      height={normalizeUnit(height)}
    />
  )
}

ApacheOriginal.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default ApacheOriginal
