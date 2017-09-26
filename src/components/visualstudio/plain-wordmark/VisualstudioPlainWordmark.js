
import React from 'react'
import PropTypes from 'prop-types'
import SVGInline from 'react-svg-inline'
import iconSVG from './VisualstudioPlainWordmark.svg'
import { normalizeUnit } from '../../../utils.js'

/** VisualstudioPlainWordmark */
function VisualstudioPlainWordmark({width, height}) {
  return (
     <SVGInline
      svg={iconSVG}
      width={normalizeUnit(width)}
      height={normalizeUnit(height)}
    />
  )
}

VisualstudioPlainWordmark.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default VisualstudioPlainWordmark
