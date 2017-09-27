
import React from 'react'
import PropTypes from 'prop-types'
import SVGInline from 'react-svg-inline'
import iconSVG from './AmazonwebservicesOriginal.svg'
import { normalizeUnit } from '../../utils.js'

/** AmazonwebservicesOriginal */
function AmazonwebservicesOriginal({width, height}) {
  return (
     <SVGInline
      classSuffix="-devicon"
      className="AmazonwebservicesOriginal"
      svg={iconSVG}
      width={normalizeUnit(width)}
      height={normalizeUnit(height)}
    />
  )
}

AmazonwebservicesOriginal.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default AmazonwebservicesOriginal
