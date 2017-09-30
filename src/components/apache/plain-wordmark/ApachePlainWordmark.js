import React from 'react'
import PropTypes from 'prop-types'
import SVGInline from 'react-svg-inline'
import iconSVG from './ApachePlainWordmark.svg'
import { normalizeUnit } from '../../utils.js'

/** ApachePlainWordmark */
function ApachePlainWordmark({ width, height }) {
  return (
    <SVGInline
      classSuffix="-devicon"
      className="ApachePlainWordmark"
      svg={iconSVG}
      width={normalizeUnit(width)}
      height={normalizeUnit(height)}
    />
  )
}

ApachePlainWordmark.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default ApachePlainWordmark
