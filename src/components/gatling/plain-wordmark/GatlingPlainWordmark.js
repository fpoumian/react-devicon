import React from 'react'
import PropTypes from 'prop-types'
import SVGInline from 'react-svg-inline'
import iconSVG from './GatlingPlainWordmark.svg'
import { normalizeUnit } from '../../utils.js'

/** GatlingPlainWordmark */
function GatlingPlainWordmark({ width, height }) {
  return (
    <SVGInline
      classSuffix="-devicon"
      className="GatlingPlainWordmark"
      svg={iconSVG}
      width={normalizeUnit(width)}
      height={normalizeUnit(height)}
    />
  )
}

GatlingPlainWordmark.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default GatlingPlainWordmark
