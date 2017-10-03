
import React from 'react'
import PropTypes from 'prop-types'
import SVGInline from 'react-svg-inline'
import iconSVG from './DeviconPlainWordmark.svg'
import { normalizeUnit } from '../../utils.js'

/** DeviconPlainWordmark */
function DeviconPlainWordmark({width, height}) {
  return (
     <SVGInline
      classSuffix="-devicon"
      className="DeviconPlainWordmark"
      svg={iconSVG}
      width={normalizeUnit(width)}
      height={normalizeUnit(height)}
    />
  )
}

DeviconPlainWordmark.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default DeviconPlainWordmark
