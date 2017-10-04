import React from 'react'
import PropTypes from 'prop-types'
import SVGInline from 'react-svg-inline'
import iconSVG from './CsharpPlain.svg'
import { normalizeUnit } from '../../utils.js'

/** CsharpPlain */
function CsharpPlain({ width, height }) {
  return (
    <SVGInline
      classSuffix="-devicon"
      className="CsharpPlain"
      svg={iconSVG}
      width={normalizeUnit(width)}
      height={normalizeUnit(height)}
    />
  )
}

CsharpPlain.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default CsharpPlain