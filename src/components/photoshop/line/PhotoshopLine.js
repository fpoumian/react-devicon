import React from 'react'
import PropTypes from 'prop-types'
import SVGInline from 'react-svg-inline'
import iconSVG from './PhotoshopLine.svg'
import { normalizeUnit } from '../../utils.js'

/** PhotoshopLine */
function PhotoshopLine({ width, height }) {
  return (
    <SVGInline
      classSuffix="-devicon"
      className="PhotoshopLine"
      svg={iconSVG}
      width={normalizeUnit(width)}
      height={normalizeUnit(height)}
    />
  )
}

PhotoshopLine.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default PhotoshopLine
