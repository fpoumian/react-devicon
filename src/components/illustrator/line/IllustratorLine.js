
import React from 'react'
import PropTypes from 'prop-types'
import SVGInline from 'react-svg-inline'
import iconSVG from './IllustratorLine.svg'
import { normalizeUnit } from '../../utils.js'

/** IllustratorLine */
function IllustratorLine({width, height}) {
  return (
     <SVGInline
      classSuffix="-devicon"
      className="IllustratorLine"
      svg={iconSVG}
      width={normalizeUnit(width)}
      height={normalizeUnit(height)}
    />
  )
}

IllustratorLine.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default IllustratorLine
