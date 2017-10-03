
import React from 'react'
import PropTypes from 'prop-types'
import SVGInline from 'react-svg-inline'
import iconSVG from './ConfluenceOriginalWordmark.svg'
import { normalizeUnit } from '../../utils.js'

/** ConfluenceOriginalWordmark */
function ConfluenceOriginalWordmark({width, height}) {
  return (
     <SVGInline
      classSuffix="-devicon"
      className="ConfluenceOriginalWordmark"
      svg={iconSVG}
      width={normalizeUnit(width)}
      height={normalizeUnit(height)}
    />
  )
}

ConfluenceOriginalWordmark.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default ConfluenceOriginalWordmark
