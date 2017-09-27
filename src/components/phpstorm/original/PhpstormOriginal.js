
import React from 'react'
import PropTypes from 'prop-types'
import SVGInline from 'react-svg-inline'
import iconSVG from './PhpstormOriginal.svg'
import { normalizeUnit } from '../../utils.js'

/** PhpstormOriginal */
function PhpstormOriginal({width, height}) {
  return (
     <SVGInline
      classSuffix="-devicon"
      className="PhpstormOriginal"
      svg={iconSVG}
      width={normalizeUnit(width)}
      height={normalizeUnit(height)}
    />
  )
}

PhpstormOriginal.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default PhpstormOriginal
