
import React from 'react'
import PropTypes from 'prop-types'
import SVGInline from 'react-svg-inline'
import iconSVG from './VagrantPlainWordmark.svg'
import { normalizeUnit } from '../../utils.js'

/** VagrantPlainWordmark */
function VagrantPlainWordmark({width, height}) {
  return (
     <SVGInline
      classSuffix="-devicon"
      className="VagrantPlainWordmark"
      svg={iconSVG}
      width={normalizeUnit(width)}
      height={normalizeUnit(height)}
    />
  )
}

VagrantPlainWordmark.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default VagrantPlainWordmark
