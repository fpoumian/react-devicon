import React from 'react'
import PropTypes from 'prop-types'
import SVGInline from 'react-svg-inline'
import iconSVG from './JqueryOriginal.svg'
import { normalizeUnit } from '../../utils.js'

/** JqueryOriginal */
function JqueryOriginal({ width, height }) {
  return (
    <SVGInline
      classSuffix="-devicon"
      className="JqueryOriginal"
      svg={iconSVG}
      width={normalizeUnit(width)}
      height={normalizeUnit(height)}
    />
  )
}

JqueryOriginal.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default JqueryOriginal
