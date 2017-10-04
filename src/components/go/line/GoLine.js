import React from 'react'
import PropTypes from 'prop-types'
import SVGInline from 'react-svg-inline'
import iconSVG from './GoLine.svg'
import { normalizeUnit } from '../../utils.js'

/** GoLine */
function GoLine({ width, height }) {
  return (
    <SVGInline
      classSuffix="-devicon"
      className="GoLine"
      svg={iconSVG}
      width={normalizeUnit(width)}
      height={normalizeUnit(height)}
    />
  )
}

GoLine.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default GoLine