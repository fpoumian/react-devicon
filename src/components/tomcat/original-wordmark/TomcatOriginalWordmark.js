
import React from 'react'
import PropTypes from 'prop-types'
import SVGInline from 'react-svg-inline'
import iconSVG from './TomcatOriginalWordmark.svg'
import { normalizeUnit } from '../../utils.js'

/** TomcatOriginalWordmark */
function TomcatOriginalWordmark({width, height}) {
  return (
     <SVGInline
      classSuffix="-devicon"
      className="TomcatOriginalWordmark"
      svg={iconSVG}
      width={normalizeUnit(width)}
      height={normalizeUnit(height)}
    />
  )
}

TomcatOriginalWordmark.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default TomcatOriginalWordmark
