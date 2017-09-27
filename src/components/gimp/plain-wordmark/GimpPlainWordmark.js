
import React from 'react'
import PropTypes from 'prop-types'
import SVGInline from 'react-svg-inline'
import iconSVG from './GimpPlainWordmark.svg'
import { normalizeUnit } from '../../utils.js'

/** GimpPlainWordmark */
function GimpPlainWordmark({width, height}) {
  return (
     <SVGInline
      classSuffix="-devicon"
      className="GimpPlainWordmark"
      svg={iconSVG}
      width={normalizeUnit(width)}
      height={normalizeUnit(height)}
    />
  )
}

GimpPlainWordmark.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default GimpPlainWordmark
