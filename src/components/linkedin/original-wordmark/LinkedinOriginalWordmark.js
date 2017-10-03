
import React from 'react'
import PropTypes from 'prop-types'
import SVGInline from 'react-svg-inline'
import iconSVG from './LinkedinOriginalWordmark.svg'
import { normalizeUnit } from '../../utils.js'

/** LinkedinOriginalWordmark */
function LinkedinOriginalWordmark({width, height}) {
  return (
     <SVGInline
      classSuffix="-devicon"
      className="LinkedinOriginalWordmark"
      svg={iconSVG}
      width={normalizeUnit(width)}
      height={normalizeUnit(height)}
    />
  )
}

LinkedinOriginalWordmark.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default LinkedinOriginalWordmark
