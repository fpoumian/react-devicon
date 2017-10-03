
import React from 'react'
import PropTypes from 'prop-types'
import SVGInline from 'react-svg-inline'
import iconSVG from './AndroidOriginalWordmark.svg'
import { normalizeUnit } from '../../utils.js'

/** AndroidOriginalWordmark */
function AndroidOriginalWordmark({width, height}) {
  return (
     <SVGInline
      classSuffix="-devicon"
      className="AndroidOriginalWordmark"
      svg={iconSVG}
      width={normalizeUnit(width)}
      height={normalizeUnit(height)}
    />
  )
}

AndroidOriginalWordmark.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default AndroidOriginalWordmark
