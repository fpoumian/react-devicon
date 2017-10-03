import React from 'react'
import PropTypes from 'prop-types'
import SVGInline from 'react-svg-inline'
import iconSVG from './HerokuOriginal.svg'
import { normalizeUnit } from '../../utils.js'

/** HerokuOriginal */
function HerokuOriginal({ width, height }) {
  return (
    <SVGInline
      classSuffix="-devicon"
      className="HerokuOriginal"
      svg={iconSVG}
      width={normalizeUnit(width)}
      height={normalizeUnit(height)}
    />
  )
}

HerokuOriginal.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default HerokuOriginal
