import React from 'react'
import PropTypes from 'prop-types'
import SVGInline from 'react-svg-inline'
import iconSVG from './Css3OriginalWordmark.svg'
import { normalizeUnit } from '../../utils.js'

/** Css3OriginalWordmark */
function Css3OriginalWordmark({ width, height }) {
  return (
    <SVGInline
      classSuffix="-devicon"
      className="Css3OriginalWordmark"
      svg={iconSVG}
      width={normalizeUnit(width)}
      height={normalizeUnit(height)}
    />
  )
}

Css3OriginalWordmark.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default Css3OriginalWordmark
