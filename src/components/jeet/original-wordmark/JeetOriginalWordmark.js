
import React from 'react'
import PropTypes from 'prop-types'
import SVGInline from 'react-svg-inline'
import iconSVG from './JeetOriginalWordmark.svg'
import { normalizeUnit } from '../../utils.js'

/** JeetOriginalWordmark */
function JeetOriginalWordmark({width, height}) {
  return (
     <SVGInline
      classSuffix="-devicon"
      className="JeetOriginalWordmark"
      svg={iconSVG}
      width={normalizeUnit(width)}
      height={normalizeUnit(height)}
    />
  )
}

JeetOriginalWordmark.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default JeetOriginalWordmark
