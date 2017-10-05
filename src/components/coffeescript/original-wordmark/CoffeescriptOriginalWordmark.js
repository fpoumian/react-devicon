import React from 'react'
import PropTypes from 'prop-types'
import SVGDeviconInline from '../../_base/SVGDeviconInline'

import iconSVG from './CoffeescriptOriginalWordmark.svg'

/** CoffeescriptOriginalWordmark */
function CoffeescriptOriginalWordmark({ width, height, className }) {
  return (
    <SVGDeviconInline
      className={'CoffeescriptOriginalWordmark' + ' ' + className}
      iconSVG={iconSVG}
      width={width}
      height={height}
    />
  )
}

CoffeescriptOriginalWordmark.propTypes = {
  className: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default CoffeescriptOriginalWordmark
