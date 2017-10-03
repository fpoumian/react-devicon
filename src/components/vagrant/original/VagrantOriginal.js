
import React from 'react'
import PropTypes from 'prop-types'
import SVGInline from 'react-svg-inline'
import iconSVG from './VagrantOriginal.svg'
import { normalizeUnit } from '../../utils.js'

/** VagrantOriginal */
function VagrantOriginal({width, height}) {
  return (
     <SVGInline
      classSuffix="-devicon"
      className="VagrantOriginal"
      svg={iconSVG}
      width={normalizeUnit(width)}
      height={normalizeUnit(height)}
    />
  )
}

VagrantOriginal.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default VagrantOriginal
