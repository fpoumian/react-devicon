
import React from 'react'
import PropTypes from 'prop-types'
import SVGInline from 'react-svg-inline'
import iconSVG from './InkscapeOriginal.svg'
import { normalizeUnit } from '../../utils.js'

/** InkscapeOriginal */
function InkscapeOriginal({width, height}) {
  return (
     <SVGInline
      classSuffix="-devicon"
      className="InkscapeOriginal"
      svg={iconSVG}
      width={normalizeUnit(width)}
      height={normalizeUnit(height)}
    />
  )
}

InkscapeOriginal.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default InkscapeOriginal
