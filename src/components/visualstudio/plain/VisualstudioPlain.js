
import React from 'react'
import PropTypes from 'prop-types'
import SVGInline from 'react-svg-inline'
import iconSVG from './VisualstudioPlain.svg'
import { normalizeUnit } from '../../utils.js'

/** VisualstudioPlain */
function VisualstudioPlain({width, height}) {
  return (
     <SVGInline
      classSuffix="-devicon"
      className="VisualstudioPlain"
      svg={iconSVG}
      width={normalizeUnit(width)}
      height={normalizeUnit(height)}
    />
  )
}

VisualstudioPlain.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default VisualstudioPlain
