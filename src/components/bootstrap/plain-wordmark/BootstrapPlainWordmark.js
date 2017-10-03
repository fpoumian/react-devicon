import React from 'react'
import PropTypes from 'prop-types'
import SVGInline from 'react-svg-inline'
import iconSVG from './BootstrapPlainWordmark.svg'
import { normalizeUnit } from '../../utils.js'

/** BootstrapPlainWordmark */
function BootstrapPlainWordmark({ width, height }) {
  return (
    <SVGInline
      classSuffix="-devicon"
      className="BootstrapPlainWordmark"
      svg={iconSVG}
      width={normalizeUnit(width)}
      height={normalizeUnit(height)}
    />
  )
}

BootstrapPlainWordmark.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default BootstrapPlainWordmark
