import React from 'react'
import PropTypes from 'prop-types'
import SVGInline from 'react-svg-inline'
import iconSVG from './ApacheLine.svg'
import { normalizeUnit } from '../../utils.js'

/** ApacheLine */
function ApacheLine({ width, height }) {
  return (
    <SVGInline
      classSuffix="-devicon"
      className="ApacheLine"
      svg={iconSVG}
      width={normalizeUnit(width)}
      height={normalizeUnit(height)}
    />
  )
}

ApacheLine.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default ApacheLine
