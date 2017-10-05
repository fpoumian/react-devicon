import React from 'react'
import PropTypes from 'prop-types'
import SVGInline from 'react-svg-inline'
import normalizeCSSUnit from 'normalize-css-unit'

import iconSVG from './CoffeescriptOriginal.svg'

/** CoffeescriptOriginal */
function CoffeescriptOriginal({ width, height }) {
  return (
    <SVGInline
      classSuffix="-devicon"
      className="CoffeescriptOriginal"
      svg={iconSVG}
      width={width ? normalizeCSSUnit(width) : ''}
      height={height ? normalizeCSSUnit(height) : ''}
    />
  )
}

CoffeescriptOriginal.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default CoffeescriptOriginal
