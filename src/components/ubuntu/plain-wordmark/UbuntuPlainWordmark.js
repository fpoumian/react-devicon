import React from 'react'
import PropTypes from 'prop-types'
import SVGInline from 'react-svg-inline'
import iconSVG from './UbuntuPlainWordmark.svg'
import { normalizeUnit } from '../../utils.js'

/** UbuntuPlainWordmark */
function UbuntuPlainWordmark({ width, height }) {
  return (
    <SVGInline
      classSuffix="-devicon"
      className="UbuntuPlainWordmark"
      svg={iconSVG}
      width={normalizeUnit(width)}
      height={normalizeUnit(height)}
    />
  )
}

UbuntuPlainWordmark.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default UbuntuPlainWordmark
