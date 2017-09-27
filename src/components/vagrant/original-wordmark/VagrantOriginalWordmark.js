
import React from 'react'
import PropTypes from 'prop-types'
import SVGInline from 'react-svg-inline'
import iconSVG from './VagrantOriginalWordmark.svg'
import { normalizeUnit } from '../../utils.js'

/** VagrantOriginalWordmark */
function VagrantOriginalWordmark({width, height}) {
  return (
     <SVGInline
      classSuffix="-devicon"
      className="VagrantOriginalWordmark"
      svg={iconSVG}
      width={normalizeUnit(width)}
      height={normalizeUnit(height)}
    />
  )
}

VagrantOriginalWordmark.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default VagrantOriginalWordmark
