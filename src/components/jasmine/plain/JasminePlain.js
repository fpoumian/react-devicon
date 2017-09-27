
import React from 'react'
import PropTypes from 'prop-types'
import SVGInline from 'react-svg-inline'
import iconSVG from './JasminePlain.svg'
import { normalizeUnit } from '../../utils.js'

/** JasminePlain */
function JasminePlain({width, height}) {
  return (
     <SVGInline
      classSuffix="-devicon"
      className="JasminePlain"
      svg={iconSVG}
      width={normalizeUnit(width)}
      height={normalizeUnit(height)}
    />
  )
}

JasminePlain.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default JasminePlain
