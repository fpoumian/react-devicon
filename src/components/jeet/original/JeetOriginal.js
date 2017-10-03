import React from 'react'
import PropTypes from 'prop-types'
import SVGInline from 'react-svg-inline'
import iconSVG from './JeetOriginal.svg'
import { normalizeUnit } from '../../utils.js'

/** JeetOriginal */
function JeetOriginal({ width, height }) {
  return (
    <SVGInline
      classSuffix="-devicon"
      className="JeetOriginal"
      svg={iconSVG}
      width={normalizeUnit(width)}
      height={normalizeUnit(height)}
    />
  )
}

JeetOriginal.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default JeetOriginal
