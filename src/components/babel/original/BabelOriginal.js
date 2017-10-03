
import React from 'react'
import PropTypes from 'prop-types'
import SVGInline from 'react-svg-inline'
import iconSVG from './BabelOriginal.svg'
import { normalizeUnit } from '../../utils.js'

/** BabelOriginal */
function BabelOriginal({width, height}) {
  return (
     <SVGInline
      classSuffix="-devicon"
      className="BabelOriginal"
      svg={iconSVG}
      width={normalizeUnit(width)}
      height={normalizeUnit(height)}
    />
  )
}

BabelOriginal.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default BabelOriginal
