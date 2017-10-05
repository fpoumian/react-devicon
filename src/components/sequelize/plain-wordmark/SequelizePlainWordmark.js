import React from 'react'
import PropTypes from 'prop-types'
import SVGInline from 'react-svg-inline'
import normalizeCSSUnit from 'normalize-css-unit'

import iconSVG from './SequelizePlainWordmark.svg'

/** SequelizePlainWordmark */
function SequelizePlainWordmark({ width, height }) {
  return (
    <SVGInline
      classSuffix="-devicon"
      className="SequelizePlainWordmark"
      svg={iconSVG}
      width={width ? normalizeCSSUnit(width) : ''}
      height={height ? normalizeCSSUnit(height) : ''}
    />
  )
}

SequelizePlainWordmark.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default SequelizePlainWordmark
