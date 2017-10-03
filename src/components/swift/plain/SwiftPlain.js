import React from 'react'
import PropTypes from 'prop-types'
import SVGInline from 'react-svg-inline'
import iconSVG from './SwiftPlain.svg'
import { normalizeUnit } from '../../utils.js'

/** SwiftPlain */
function SwiftPlain({ width, height }) {
  return (
    <SVGInline
      classSuffix="-devicon"
      className="SwiftPlain"
      svg={iconSVG}
      width={normalizeUnit(width)}
      height={normalizeUnit(height)}
    />
  )
}

SwiftPlain.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default SwiftPlain
