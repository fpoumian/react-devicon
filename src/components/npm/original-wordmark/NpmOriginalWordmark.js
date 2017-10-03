
import React from 'react'
import PropTypes from 'prop-types'
import SVGInline from 'react-svg-inline'
import iconSVG from './NpmOriginalWordmark.svg'
import { normalizeUnit } from '../../utils.js'

/** NpmOriginalWordmark */
function NpmOriginalWordmark({width, height}) {
  return (
     <SVGInline
      classSuffix="-devicon"
      className="NpmOriginalWordmark"
      svg={iconSVG}
      width={normalizeUnit(width)}
      height={normalizeUnit(height)}
    />
  )
}

NpmOriginalWordmark.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default NpmOriginalWordmark
