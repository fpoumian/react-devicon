
import React from 'react'
import PropTypes from 'prop-types'
import SVGInline from 'react-svg-inline'
import iconSVG from './GradlePlainWordmark.svg'
import { normalizeUnit } from '../../utils.js'

/** GradlePlainWordmark */
function GradlePlainWordmark({width, height}) {
  return (
     <SVGInline
      classSuffix="-devicon"
      className="GradlePlainWordmark"
      svg={iconSVG}
      width={normalizeUnit(width)}
      height={normalizeUnit(height)}
    />
  )
}

GradlePlainWordmark.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default GradlePlainWordmark
