import React from 'react'
import PropTypes from 'prop-types'
import SVGInline from 'react-svg-inline'
import iconSVG from './NodewebkitPlainWordmark.svg'
import { normalizeUnit } from '../../utils.js'

/** NodewebkitPlainWordmark */
function NodewebkitPlainWordmark({ width, height }) {
  return (
    <SVGInline
      classSuffix="-devicon"
      className="NodewebkitPlainWordmark"
      svg={iconSVG}
      width={normalizeUnit(width)}
      height={normalizeUnit(height)}
    />
  )
}

NodewebkitPlainWordmark.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default NodewebkitPlainWordmark
