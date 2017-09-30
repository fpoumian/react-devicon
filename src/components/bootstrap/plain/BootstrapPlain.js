import React from 'react'
import PropTypes from 'prop-types'
import SVGInline from 'react-svg-inline'
import iconSVG from './BootstrapPlain.svg'
import { normalizeUnit } from '../../utils.js'

/** BootstrapPlain */
function BootstrapPlain({ width, height }) {
  return (
    <SVGInline
      classSuffix="-devicon"
      className="BootstrapPlain"
      svg={iconSVG}
      width={normalizeUnit(width)}
      height={normalizeUnit(height)}
    />
  )
}

BootstrapPlain.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default BootstrapPlain
