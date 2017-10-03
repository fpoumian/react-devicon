import React from 'react'
import PropTypes from 'prop-types'
import SVGInline from 'react-svg-inline'
import iconSVG from './FirefoxPlainWordmark.svg'
import { normalizeUnit } from '../../utils.js'

/** FirefoxPlainWordmark */
function FirefoxPlainWordmark({ width, height }) {
  return (
    <SVGInline
      classSuffix="-devicon"
      className="FirefoxPlainWordmark"
      svg={iconSVG}
      width={normalizeUnit(width)}
      height={normalizeUnit(height)}
    />
  )
}

FirefoxPlainWordmark.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default FirefoxPlainWordmark
