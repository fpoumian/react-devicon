
import React from 'react'
import PropTypes from 'prop-types'
import SVGInline from 'react-svg-inline'
import iconSVG from './NodejsOriginal.svg'
import { normalizeUnit } from '../../utils.js'

/** NodejsOriginal */
function NodejsOriginal({width, height}) {
  return (
     <SVGInline
      classSuffix="-devicon"
      className="NodejsOriginal"
      svg={iconSVG}
      width={normalizeUnit(width)}
      height={normalizeUnit(height)}
    />
  )
}

NodejsOriginal.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default NodejsOriginal
