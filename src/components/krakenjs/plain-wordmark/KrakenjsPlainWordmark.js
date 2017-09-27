
import React from 'react'
import PropTypes from 'prop-types'
import SVGInline from 'react-svg-inline'
import iconSVG from './KrakenjsPlainWordmark.svg'
import { normalizeUnit } from '../../utils.js'

/** KrakenjsPlainWordmark */
function KrakenjsPlainWordmark({width, height}) {
  return (
     <SVGInline
      classSuffix="-devicon"
      className="KrakenjsPlainWordmark"
      svg={iconSVG}
      width={normalizeUnit(width)}
      height={normalizeUnit(height)}
    />
  )
}

KrakenjsPlainWordmark.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default KrakenjsPlainWordmark
