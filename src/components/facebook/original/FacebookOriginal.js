import React from 'react'
import PropTypes from 'prop-types'
import SVGInline from 'react-svg-inline'
import iconSVG from './FacebookOriginal.svg'
import { normalizeUnit } from '../../utils.js'

/** FacebookOriginal */
function FacebookOriginal({ width, height }) {
  return (
    <SVGInline
      classSuffix="-devicon"
      className="FacebookOriginal"
      svg={iconSVG}
      width={normalizeUnit(width)}
      height={normalizeUnit(height)}
    />
  )
}

FacebookOriginal.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default FacebookOriginal