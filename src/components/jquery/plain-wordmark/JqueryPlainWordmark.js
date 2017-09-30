import React from 'react'
import PropTypes from 'prop-types'
import SVGInline from 'react-svg-inline'
import iconSVG from './JqueryPlainWordmark.svg'
import { normalizeUnit } from '../../utils.js'

/** JqueryPlainWordmark */
function JqueryPlainWordmark({ width, height }) {
  return (
    <SVGInline
      classSuffix="-devicon"
      className="JqueryPlainWordmark"
      svg={iconSVG}
      width={normalizeUnit(width)}
      height={normalizeUnit(height)}
    />
  )
}

JqueryPlainWordmark.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default JqueryPlainWordmark
