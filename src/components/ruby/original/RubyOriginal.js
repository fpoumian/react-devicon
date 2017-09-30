import React from 'react'
import PropTypes from 'prop-types'
import SVGInline from 'react-svg-inline'
import iconSVG from './RubyOriginal.svg'
import { normalizeUnit } from '../../utils.js'

/** RubyOriginal */
function RubyOriginal({ width, height }) {
  return (
    <SVGInline
      classSuffix="-devicon"
      className="RubyOriginal"
      svg={iconSVG}
      width={normalizeUnit(width)}
      height={normalizeUnit(height)}
    />
  )
}

RubyOriginal.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default RubyOriginal
