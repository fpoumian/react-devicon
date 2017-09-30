import React from 'react'
import PropTypes from 'prop-types'
import SVGInline from 'react-svg-inline'
import iconSVG from './SketchLine.svg'
import { normalizeUnit } from '../../utils.js'

/** SketchLine */
function SketchLine({ width, height }) {
  return (
    <SVGInline
      classSuffix="-devicon"
      className="SketchLine"
      svg={iconSVG}
      width={normalizeUnit(width)}
      height={normalizeUnit(height)}
    />
  )
}

SketchLine.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default SketchLine
