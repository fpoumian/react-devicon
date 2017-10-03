import React from 'react'
import PropTypes from 'prop-types'
import SVGInline from 'react-svg-inline'
import iconSVG from './LinkedinOriginal.svg'
import { normalizeUnit } from '../../utils.js'

/** LinkedinOriginal */
function LinkedinOriginal({ width, height }) {
  return (
    <SVGInline
      classSuffix="-devicon"
      className="LinkedinOriginal"
      svg={iconSVG}
      width={normalizeUnit(width)}
      height={normalizeUnit(height)}
    />
  )
}

LinkedinOriginal.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default LinkedinOriginal
