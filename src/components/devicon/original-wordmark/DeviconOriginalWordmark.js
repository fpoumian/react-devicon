import React from 'react'
import PropTypes from 'prop-types'
import SVGInline from 'react-svg-inline'
import normalizeCSSUnit from 'normalize-css-unit'

import iconSVG from './DeviconOriginalWordmark.svg'

/** DeviconOriginalWordmark */
function DeviconOriginalWordmark({ width, height }) {
  return (
    <SVGInline
      classSuffix="-devicon"
      className="DeviconOriginalWordmark"
      svg={iconSVG}
      width={width ? normalizeCSSUnit(width) : ''}
      height={height ? normalizeCSSUnit(height) : ''}
    />
  )
}

DeviconOriginalWordmark.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default DeviconOriginalWordmark
