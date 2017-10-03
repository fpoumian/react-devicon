
import React from 'react'
import PropTypes from 'prop-types'
import SVGInline from 'react-svg-inline'
import iconSVG from './BackbonejsOriginal.svg'
import { normalizeUnit } from '../../utils.js'

/** BackbonejsOriginal */
function BackbonejsOriginal({width, height}) {
  return (
     <SVGInline
      classSuffix="-devicon"
      className="BackbonejsOriginal"
      svg={iconSVG}
      width={normalizeUnit(width)}
      height={normalizeUnit(height)}
    />
  )
}

BackbonejsOriginal.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default BackbonejsOriginal
