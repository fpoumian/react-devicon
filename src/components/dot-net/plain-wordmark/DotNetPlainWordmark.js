import React from 'react'
import PropTypes from 'prop-types'
import SVGInline from 'react-svg-inline'
import iconSVG from './DotNetPlainWordmark.svg'
import { normalizeUnit } from '../../utils.js'

/** DotNetPlainWordmark */
function DotNetPlainWordmark({ width, height }) {
  return (
    <SVGInline
      classSuffix="-devicon"
      className="DotNetPlainWordmark"
      svg={iconSVG}
      width={normalizeUnit(width)}
      height={normalizeUnit(height)}
    />
  )
}

DotNetPlainWordmark.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default DotNetPlainWordmark
