
import React from 'react'
import PropTypes from 'prop-types'
import SVGInline from 'react-svg-inline'
import iconSVG from './SequelizePlainWordmark.svg'
import { normalizeUnit } from '../../../utils.js'

/** SequelizePlainWordmark */
function SequelizePlainWordmark({width, height}) {
  return (
     <SVGInline
      svg={iconSVG}
      width={normalizeUnit(width)}
      height={normalizeUnit(height)}
    />
  )
}

SequelizePlainWordmark.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default SequelizePlainWordmark
