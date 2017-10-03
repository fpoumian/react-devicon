
import React from 'react'
import PropTypes from 'prop-types'
import SVGInline from 'react-svg-inline'
import iconSVG from './NodejsPlain.svg'
import { normalizeUnit } from '../../utils.js'

/** NodejsPlain */
function NodejsPlain({width, height}) {
  return (
     <SVGInline
      classSuffix="-devicon"
      className="NodejsPlain"
      svg={iconSVG}
      width={normalizeUnit(width)}
      height={normalizeUnit(height)}
    />
  )
}

NodejsPlain.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default NodejsPlain
