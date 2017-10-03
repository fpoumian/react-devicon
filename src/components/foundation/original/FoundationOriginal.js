import React from 'react'
import PropTypes from 'prop-types'
import SVGInline from 'react-svg-inline'
import iconSVG from './FoundationOriginal.svg'
import { normalizeUnit } from '../../utils.js'

/** FoundationOriginal */
function FoundationOriginal({ width, height }) {
  return (
    <SVGInline
      classSuffix="-devicon"
      className="FoundationOriginal"
      svg={iconSVG}
      width={normalizeUnit(width)}
      height={normalizeUnit(height)}
    />
  )
}

FoundationOriginal.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default FoundationOriginal
