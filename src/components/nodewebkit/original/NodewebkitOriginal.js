import React from 'react'
import PropTypes from 'prop-types'
import SVGInline from 'react-svg-inline'
import iconSVG from './NodewebkitOriginal.svg'
import { normalizeUnit } from '../../utils.js'

/** NodewebkitOriginal */
function NodewebkitOriginal({ width, height }) {
  return (
    <SVGInline
      classSuffix="-devicon"
      className="NodewebkitOriginal"
      svg={iconSVG}
      width={normalizeUnit(width)}
      height={normalizeUnit(height)}
    />
  )
}

NodewebkitOriginal.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default NodewebkitOriginal
