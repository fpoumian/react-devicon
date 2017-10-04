import React from 'react'
import PropTypes from 'prop-types'
import SVGInline from 'react-svg-inline'
import iconSVG from './DebianPlainWordmark.svg'
import { normalizeUnit } from '../../utils.js'

/** DebianPlainWordmark */
function DebianPlainWordmark({ width, height }) {
  return (
    <SVGInline
      classSuffix="-devicon"
      className="DebianPlainWordmark"
      svg={iconSVG}
      width={normalizeUnit(width)}
      height={normalizeUnit(height)}
    />
  )
}

DebianPlainWordmark.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default DebianPlainWordmark