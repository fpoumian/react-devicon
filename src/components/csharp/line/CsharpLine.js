
import React from 'react'
import PropTypes from 'prop-types'
import SVGInline from 'react-svg-inline'
import iconSVG from './CsharpLine.svg'
import { normalizeUnit } from '../../utils.js'

/** CsharpLine */
function CsharpLine({width, height}) {
  return (
     <SVGInline
      classSuffix="-devicon"
      className="CsharpLine"
      svg={iconSVG}
      width={normalizeUnit(width)}
      height={normalizeUnit(height)}
    />
  )
}

CsharpLine.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default CsharpLine
