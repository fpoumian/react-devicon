
import React from 'react'
import PropTypes from 'prop-types'
import SVGInline from 'react-svg-inline'
import iconSVG from './Css3PlainWordmark.svg'
import { normalizeUnit } from '../../../utils.js'

/** Css3PlainWordmark */
function Css3PlainWordmark({width, height}) {
  return (
     <SVGInline
      svg={iconSVG}
      width={normalizeUnit(width)}
      height={normalizeUnit(height)}
    />
  )
}

Css3PlainWordmark.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default Css3PlainWordmark
