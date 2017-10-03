import React from 'react'
import PropTypes from 'prop-types'
import SVGInline from 'react-svg-inline'
import iconSVG from './HerokuPlainWordmark.svg'
import { normalizeUnit } from '../../utils.js'

/** HerokuPlainWordmark */
function HerokuPlainWordmark({ width, height }) {
  return (
    <SVGInline
      classSuffix="-devicon"
      className="HerokuPlainWordmark"
      svg={iconSVG}
      width={normalizeUnit(width)}
      height={normalizeUnit(height)}
    />
  )
}

HerokuPlainWordmark.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default HerokuPlainWordmark
