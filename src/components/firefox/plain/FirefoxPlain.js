import React from 'react'
import PropTypes from 'prop-types'
import SVGInline from 'react-svg-inline'
import iconSVG from './FirefoxPlain.svg'
import { normalizeUnit } from '../../utils.js'

/** FirefoxPlain */
function FirefoxPlain({ width, height }) {
  return (
    <SVGInline
      classSuffix="-devicon"
      className="FirefoxPlain"
      svg={iconSVG}
      width={normalizeUnit(width)}
      height={normalizeUnit(height)}
    />
  )
}

FirefoxPlain.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default FirefoxPlain
