
import React from 'react'
import PropTypes from 'prop-types'
import SVGInline from 'react-svg-inline'
import iconSVG from './DeviconOriginalWordmark.svg'
import { normalizeUnit } from '../../utils.js'

/** DeviconOriginalWordmark */
function DeviconOriginalWordmark({width, height}) {
  return (
     <SVGInline
      classSuffix="-devicon"
      className="DeviconOriginalWordmark"
      svg={iconSVG}
      width={normalizeUnit(width)}
      height={normalizeUnit(height)}
    />
  )
}

DeviconOriginalWordmark.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default DeviconOriginalWordmark
