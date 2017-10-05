import React from 'react'
import PropTypes from 'prop-types'
import SVGInline from 'react-svg-inline'
import normalizeCSSUnit from 'normalize-css-unit'

import iconSVG from './MeteorPlainWordmark.svg'

/** MeteorPlainWordmark */
function MeteorPlainWordmark({ width, height }) {
  return (
    <SVGInline
      classSuffix="-devicon"
      className="MeteorPlainWordmark"
      svg={iconSVG}
      width={width ? normalizeCSSUnit(width) : ''}
      height={height ? normalizeCSSUnit(height) : ''}
    />
  )
}

MeteorPlainWordmark.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default MeteorPlainWordmark
