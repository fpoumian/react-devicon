
import React from 'react'
import PropTypes from 'prop-types'
import SVGInline from 'react-svg-inline'
import iconSVG from './SequelizeOriginal.svg'
import { normalizeUnit } from '../../utils.js'

/** SequelizeOriginal */
function SequelizeOriginal({width, height}) {
  return (
     <SVGInline
      classSuffix="-devicon"
      className="SequelizeOriginal"
      svg={iconSVG}
      width={normalizeUnit(width)}
      height={normalizeUnit(height)}
    />
  )
}

SequelizeOriginal.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default SequelizeOriginal
