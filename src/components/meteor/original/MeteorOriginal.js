
import React from 'react'
import PropTypes from 'prop-types'
import SVGInline from 'react-svg-inline'
import iconSVG from './MeteorOriginal.svg'
import { normalizeUnit } from '../../utils.js'

/** MeteorOriginal */
function MeteorOriginal({width, height}) {
  return (
     <SVGInline
      classSuffix="-devicon"
      className="MeteorOriginal"
      svg={iconSVG}
      width={normalizeUnit(width)}
      height={normalizeUnit(height)}
    />
  )
}

MeteorOriginal.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default MeteorOriginal
