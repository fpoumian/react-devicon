
import React from 'react'
import PropTypes from 'prop-types'
import SVGInline from 'react-svg-inline'
import iconSVG from './ApachePlain.svg'
import { normalizeUnit } from '../../utils.js'

/** ApachePlain */
function ApachePlain({width, height}) {
  return (
     <SVGInline
      classSuffix="-devicon"
      className="ApachePlain"
      svg={iconSVG}
      width={normalizeUnit(width)}
      height={normalizeUnit(height)}
    />
  )
}

ApachePlain.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default ApachePlain
