import React from 'react'
import PropTypes from 'prop-types'
import SVGInline from 'react-svg-inline'
import iconSVG from './DeviconPlain.svg'
import { normalizeUnit } from '../../utils.js'

/** DeviconPlain */
function DeviconPlain({ width, height }) {
  return (
    <SVGInline
      classSuffix="-devicon"
      className="DeviconPlain"
      svg={iconSVG}
      width={normalizeUnit(width)}
      height={normalizeUnit(height)}
    />
  )
}

DeviconPlain.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default DeviconPlain
