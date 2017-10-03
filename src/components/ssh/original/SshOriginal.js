
import React from 'react'
import PropTypes from 'prop-types'
import SVGInline from 'react-svg-inline'
import iconSVG from './SshOriginal.svg'
import { normalizeUnit } from '../../utils.js'

/** SshOriginal */
function SshOriginal({width, height}) {
  return (
     <SVGInline
      classSuffix="-devicon"
      className="SshOriginal"
      svg={iconSVG}
      width={normalizeUnit(width)}
      height={normalizeUnit(height)}
    />
  )
}

SshOriginal.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default SshOriginal
