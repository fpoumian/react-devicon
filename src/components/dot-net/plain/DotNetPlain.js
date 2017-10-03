import React from 'react'
import PropTypes from 'prop-types'
import SVGInline from 'react-svg-inline'
import iconSVG from './DotNetPlain.svg'
import { normalizeUnit } from '../../utils.js'

/** DotNetPlain */
function DotNetPlain({ width, height }) {
  return (
    <SVGInline
      classSuffix="-devicon"
      className="DotNetPlain"
      svg={iconSVG}
      width={normalizeUnit(width)}
      height={normalizeUnit(height)}
    />
  )
}

DotNetPlain.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default DotNetPlain
