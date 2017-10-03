
import React from 'react'
import PropTypes from 'prop-types'
import SVGInline from 'react-svg-inline'
import iconSVG from './CplusplusLine.svg'
import { normalizeUnit } from '../../utils.js'

/** CplusplusLine */
function CplusplusLine({width, height}) {
  return (
     <SVGInline
      classSuffix="-devicon"
      className="CplusplusLine"
      svg={iconSVG}
      width={normalizeUnit(width)}
      height={normalizeUnit(height)}
    />
  )
}

CplusplusLine.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default CplusplusLine
