import React from 'react'
import PropTypes from 'prop-types'
import SVGInline from 'react-svg-inline'
import iconSVG from './BabelPlain.svg'
import { normalizeUnit } from '../../utils.js'

/** BabelPlain */
function BabelPlain({ width, height }) {
  return (
    <SVGInline
      classSuffix="-devicon"
      className="BabelPlain"
      svg={iconSVG}
      width={normalizeUnit(width)}
      height={normalizeUnit(height)}
    />
  )
}

BabelPlain.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default BabelPlain
