
import React from 'react'
import PropTypes from 'prop-types'
import SVGInline from 'react-svg-inline'
import iconSVG from './GruntPlainWordmark.svg'
import { normalizeUnit } from '../../utils.js'

/** GruntPlainWordmark */
function GruntPlainWordmark({width, height}) {
  return (
     <SVGInline
      classSuffix="-devicon"
      className="GruntPlainWordmark"
      svg={iconSVG}
      width={normalizeUnit(width)}
      height={normalizeUnit(height)}
    />
  )
}

GruntPlainWordmark.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default GruntPlainWordmark
