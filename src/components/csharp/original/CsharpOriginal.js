import React from 'react'
import PropTypes from 'prop-types'
import SVGInline from 'react-svg-inline'
import iconSVG from './CsharpOriginal.svg'
import { normalizeUnit } from '../../utils.js'

/** CsharpOriginal */
function CsharpOriginal({ width, height }) {
  return (
    <SVGInline
      classSuffix="-devicon"
      className="CsharpOriginal"
      svg={iconSVG}
      width={normalizeUnit(width)}
      height={normalizeUnit(height)}
    />
  )
}

CsharpOriginal.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default CsharpOriginal