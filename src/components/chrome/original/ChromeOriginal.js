import React from 'react'
import PropTypes from 'prop-types'
import SVGInline from 'react-svg-inline'
import iconSVG from './ChromeOriginal.svg'
import { normalizeUnit } from '../../utils.js'

/** ChromeOriginal */
function ChromeOriginal({ width, height }) {
  return (
    <SVGInline
      classSuffix="-devicon"
      className="ChromeOriginal"
      svg={iconSVG}
      width={normalizeUnit(width)}
      height={normalizeUnit(height)}
    />
  )
}

ChromeOriginal.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default ChromeOriginal
