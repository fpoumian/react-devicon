
import React from 'react'
import PropTypes from 'prop-types'
import SVGInline from 'react-svg-inline'
import iconSVG from './AmazonwebservicesOriginalWordmark.svg'
import { normalizeUnit } from '../../utils.js'

/** AmazonwebservicesOriginalWordmark */
function AmazonwebservicesOriginalWordmark({width, height}) {
  return (
     <SVGInline
      svg={iconSVG}
      width={normalizeUnit(width)}
      height={normalizeUnit(height)}
    />
  )
}

AmazonwebservicesOriginalWordmark.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default AmazonwebservicesOriginalWordmark
