
import React from 'react'
import PropTypes from 'prop-types'
import SVGInline from 'react-svg-inline'
import iconSVG from './ElmOriginalWordmark.svg'
import { normalizeUnit } from '../../utils.js'

/** ElmOriginalWordmark */
function ElmOriginalWordmark({width, height}) {
  return (
     <SVGInline
      classSuffix="-devicon"
      className="ElmOriginalWordmark"
      svg={iconSVG}
      width={normalizeUnit(width)}
      height={normalizeUnit(height)}
    />
  )
}

ElmOriginalWordmark.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default ElmOriginalWordmark
