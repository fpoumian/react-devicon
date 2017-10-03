
import React from 'react'
import PropTypes from 'prop-types'
import SVGInline from 'react-svg-inline'
import iconSVG from './MeteorOriginalWordmark.svg'
import { normalizeUnit } from '../../utils.js'

/** MeteorOriginalWordmark */
function MeteorOriginalWordmark({width, height}) {
  return (
     <SVGInline
      classSuffix="-devicon"
      className="MeteorOriginalWordmark"
      svg={iconSVG}
      width={normalizeUnit(width)}
      height={normalizeUnit(height)}
    />
  )
}

MeteorOriginalWordmark.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default MeteorOriginalWordmark
