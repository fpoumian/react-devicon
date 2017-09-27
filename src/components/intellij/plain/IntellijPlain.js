
import React from 'react'
import PropTypes from 'prop-types'
import SVGInline from 'react-svg-inline'
import iconSVG from './IntellijPlain.svg'
import { normalizeUnit } from '../../utils.js'

/** IntellijPlain */
function IntellijPlain({width, height}) {
  return (
     <SVGInline
      classSuffix="-devicon"
      className="IntellijPlain"
      svg={iconSVG}
      width={normalizeUnit(width)}
      height={normalizeUnit(height)}
    />
  )
}

IntellijPlain.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default IntellijPlain
