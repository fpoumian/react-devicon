
import React from 'react'
import PropTypes from 'prop-types'
import SVGInline from 'react-svg-inline'
import iconSVG from './GruntLineWordmark.svg'
import { normalizeUnit } from '../../utils.js'

/** GruntLineWordmark */
function GruntLineWordmark({width, height}) {
  return (
     <SVGInline
      classSuffix="-devicon"
      className="GruntLineWordmark"
      svg={iconSVG}
      width={normalizeUnit(width)}
      height={normalizeUnit(height)}
    />
  )
}

GruntLineWordmark.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default GruntLineWordmark
