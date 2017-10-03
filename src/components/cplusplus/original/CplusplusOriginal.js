import React from 'react'
import PropTypes from 'prop-types'
import SVGInline from 'react-svg-inline'
import iconSVG from './CplusplusOriginal.svg'
import { normalizeUnit } from '../../utils.js'

/** CplusplusOriginal */
function CplusplusOriginal({ width, height }) {
  return (
    <SVGInline
      classSuffix="-devicon"
      className="CplusplusOriginal"
      svg={iconSVG}
      width={normalizeUnit(width)}
      height={normalizeUnit(height)}
    />
  )
}

CplusplusOriginal.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default CplusplusOriginal
