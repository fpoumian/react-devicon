import React from 'react'
import PropTypes from 'prop-types'
import SVGInline from 'react-svg-inline'
import iconSVG from './VuejsOriginal.svg'
import { normalizeUnit } from '../../utils.js'

/** VuejsOriginal */
function VuejsOriginal({ width, height }) {
  return (
    <SVGInline
      classSuffix="-devicon"
      className="VuejsOriginal"
      svg={iconSVG}
      width={normalizeUnit(width)}
      height={normalizeUnit(height)}
    />
  )
}

VuejsOriginal.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default VuejsOriginal
