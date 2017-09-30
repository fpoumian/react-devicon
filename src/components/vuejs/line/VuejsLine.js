import React from 'react'
import PropTypes from 'prop-types'
import SVGInline from 'react-svg-inline'
import iconSVG from './VuejsLine.svg'
import { normalizeUnit } from '../../utils.js'

/** VuejsLine */
function VuejsLine({ width, height }) {
  return (
    <SVGInline
      classSuffix="-devicon"
      className="VuejsLine"
      svg={iconSVG}
      width={normalizeUnit(width)}
      height={normalizeUnit(height)}
    />
  )
}

VuejsLine.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default VuejsLine
