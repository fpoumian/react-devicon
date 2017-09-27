
import React from 'react'
import PropTypes from 'prop-types'
import SVGInline from 'react-svg-inline'
import iconSVG from './VuejsPlainWordmark.svg'
import { normalizeUnit } from '../../utils.js'

/** VuejsPlainWordmark */
function VuejsPlainWordmark({width, height}) {
  return (
     <SVGInline
      classSuffix="-devicon"
      className="VuejsPlainWordmark"
      svg={iconSVG}
      width={normalizeUnit(width)}
      height={normalizeUnit(height)}
    />
  )
}

VuejsPlainWordmark.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default VuejsPlainWordmark
