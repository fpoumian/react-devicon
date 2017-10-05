import React from 'react'
import PropTypes from 'prop-types'
import SVGDeviconInline from '../../_base/SVGDeviconInline'

import iconSVG from './AmazonwebservicesOriginalWordmark.svg'

/** AmazonwebservicesOriginalWordmark */
function AmazonwebservicesOriginalWordmark({ width, height, className }) {
  return (
    <SVGDeviconInline
      className={'AmazonwebservicesOriginalWordmark' + ' ' + className}
      iconSVG={iconSVG}
      width={width}
      height={height}
    />
  )
}

AmazonwebservicesOriginalWordmark.propTypes = {
  className: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default AmazonwebservicesOriginalWordmark
