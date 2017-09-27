
import React from 'react'
import PropTypes from 'prop-types'
import SVGInline from 'react-svg-inline'
import iconSVG from './MongodbOriginal.svg'
import { normalizeUnit } from '../../utils.js'

/** MongodbOriginal */
function MongodbOriginal({width, height}) {
  return (
     <SVGInline
      classSuffix="-devicon"
      className="MongodbOriginal"
      svg={iconSVG}
      width={normalizeUnit(width)}
      height={normalizeUnit(height)}
    />
  )
}

MongodbOriginal.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default MongodbOriginal
