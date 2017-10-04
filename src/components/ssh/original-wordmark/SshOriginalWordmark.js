import React from 'react'
import PropTypes from 'prop-types'
import SVGInline from 'react-svg-inline'
import iconSVG from './SshOriginalWordmark.svg'
import { normalizeUnit } from '../../utils.js'

/** SshOriginalWordmark */
function SshOriginalWordmark({ width, height }) {
  return (
    <SVGInline
      classSuffix="-devicon"
      className="SshOriginalWordmark"
      svg={iconSVG}
      width={normalizeUnit(width)}
      height={normalizeUnit(height)}
    />
  )
}

SshOriginalWordmark.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default SshOriginalWordmark