
import React from 'react'
import PropTypes from 'prop-types'
import SVGInline from 'react-svg-inline'
import iconSVG from './AmazonwebservicesPlainWordmark.svg'
import { normalizeUnit } from '../../utils.js'

/** AmazonwebservicesPlainWordmark */
function AmazonwebservicesPlainWordmark({width, height}) {
  return (
     <SVGInline
      classSuffix="-devicon"
      className="AmazonwebservicesPlainWordmark"
      svg={iconSVG}
      width={normalizeUnit(width)}
      height={normalizeUnit(height)}
    />
  )
}

AmazonwebservicesPlainWordmark.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default AmazonwebservicesPlainWordmark
