import React from 'react'
import PropTypes from 'prop-types'
import SVGDeviconInline from '../../_base/SVGDeviconInline'

import iconSVG from './CoffeescriptOriginal.svg'

/** CoffeescriptOriginal */
function CoffeescriptOriginal({ width, height, className }) {
  return (
    <SVGDeviconInline
      className={'CoffeescriptOriginal' + ' ' + className}
      iconSVG={iconSVG}
      width={width}
      height={height}
    />
  )
}

CoffeescriptOriginal.propTypes = {
  className: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default CoffeescriptOriginal
