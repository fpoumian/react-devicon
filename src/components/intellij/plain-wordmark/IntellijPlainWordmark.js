
import React from 'react'
import PropTypes from 'prop-types'
import SVGInline from 'react-svg-inline'
import iconSVG from './IntellijPlainWordmark.svg'
import { normalizeUnit } from '../../utils.js'

/** IntellijPlainWordmark */
function IntellijPlainWordmark({width, height}) {
  return (
     <SVGInline
      classSuffix="-devicon"
      className="IntellijPlainWordmark"
      svg={iconSVG}
      width={normalizeUnit(width)}
      height={normalizeUnit(height)}
    />
  )
}

IntellijPlainWordmark.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default IntellijPlainWordmark
