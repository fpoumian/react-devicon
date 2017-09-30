import React from 'react'
import PropTypes from 'prop-types'
import SVGInline from 'react-svg-inline'
import iconSVG from './AndroidOriginal.svg'
import { normalizeUnit } from '../../utils.js'

/** AndroidOriginal */
function AndroidOriginal({ width, height }) {
  return (
    <SVGInline
      classSuffix="-devicon"
      className="AndroidOriginal"
      svg={iconSVG}
      width={normalizeUnit(width)}
      height={normalizeUnit(height)}
    />
  )
}

AndroidOriginal.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default AndroidOriginal
