
import React from 'react'
import PropTypes from 'prop-types'
import SVGInline from 'react-svg-inline'
import iconSVG from './RubyOriginalWordmark.svg'
import { normalizeUnit } from '../../utils.js'

/** RubyOriginalWordmark */
function RubyOriginalWordmark({width, height}) {
  return (
     <SVGInline
      classSuffix="-devicon"
      className="RubyOriginalWordmark"
      svg={iconSVG}
      width={normalizeUnit(width)}
      height={normalizeUnit(height)}
    />
  )
}

RubyOriginalWordmark.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default RubyOriginalWordmark
