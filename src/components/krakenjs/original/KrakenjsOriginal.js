import React from 'react'
import PropTypes from 'prop-types'
import SVGInline from 'react-svg-inline'
import iconSVG from './KrakenjsOriginal.svg'
import { normalizeUnit } from '../../utils.js'

/** KrakenjsOriginal */
function KrakenjsOriginal({ width, height }) {
  return (
    <SVGInline
      classSuffix="-devicon"
      className="KrakenjsOriginal"
      svg={iconSVG}
      width={normalizeUnit(width)}
      height={normalizeUnit(height)}
    />
  )
}

KrakenjsOriginal.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default KrakenjsOriginal
