import React from 'react'
import PropTypes from 'prop-types'
import SVGInline from 'react-svg-inline'
import iconSVG from './IllustratorPlain.svg'
import { normalizeUnit } from '../../utils.js'

/** IllustratorPlain */
function IllustratorPlain({ width, height }) {
  return (
    <SVGInline
      classSuffix="-devicon"
      className="IllustratorPlain"
      svg={iconSVG}
      width={normalizeUnit(width)}
      height={normalizeUnit(height)}
    />
  )
}

IllustratorPlain.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default IllustratorPlain