
import React from 'react'
import PropTypes from 'prop-types'
import SVGInline from 'react-svg-inline'
import iconSVG from './GoogleOriginal.svg'
import { normalizeUnit } from '../../utils.js'

/** GoogleOriginal */
function GoogleOriginal({width, height}) {
  return (
     <SVGInline
      classSuffix="-devicon"
      className="GoogleOriginal"
      svg={iconSVG}
      width={normalizeUnit(width)}
      height={normalizeUnit(height)}
    />
  )
}

GoogleOriginal.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default GoogleOriginal
