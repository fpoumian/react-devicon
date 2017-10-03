import React from 'react'
import PropTypes from 'prop-types'
import SVGInline from 'react-svg-inline'
import iconSVG from './DoctrineOriginal.svg'
import { normalizeUnit } from '../../utils.js'

/** DoctrineOriginal */
function DoctrineOriginal({ width, height }) {
  return (
    <SVGInline
      classSuffix="-devicon"
      className="DoctrineOriginal"
      svg={iconSVG}
      width={normalizeUnit(width)}
      height={normalizeUnit(height)}
    />
  )
}

DoctrineOriginal.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default DoctrineOriginal
