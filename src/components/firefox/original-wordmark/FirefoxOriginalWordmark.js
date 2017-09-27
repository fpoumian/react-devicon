
import React from 'react'
import PropTypes from 'prop-types'
import SVGInline from 'react-svg-inline'
import iconSVG from './FirefoxOriginalWordmark.svg'
import { normalizeUnit } from '../../utils.js'

/** FirefoxOriginalWordmark */
function FirefoxOriginalWordmark({width, height}) {
  return (
     <SVGInline
      classSuffix="-devicon"
      className="FirefoxOriginalWordmark"
      svg={iconSVG}
      width={normalizeUnit(width)}
      height={normalizeUnit(height)}
    />
  )
}

FirefoxOriginalWordmark.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default FirefoxOriginalWordmark
