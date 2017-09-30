import React from 'react'
import PropTypes from 'prop-types'
import SVGInline from 'react-svg-inline'
import iconSVG from './BehanceOriginal.svg'
import { normalizeUnit } from '../../utils.js'

/** BehanceOriginal */
function BehanceOriginal({ width, height }) {
  return (
    <SVGInline
      classSuffix="-devicon"
      className="BehanceOriginal"
      svg={iconSVG}
      width={normalizeUnit(width)}
      height={normalizeUnit(height)}
    />
  )
}

BehanceOriginal.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default BehanceOriginal
