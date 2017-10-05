import React from 'react'
import PropTypes from 'prop-types'
import SVGDeviconInline from '../../_base/SVGDeviconInline'

import iconSVG from './AmazonwebservicesOriginal.svg'

/** AmazonwebservicesOriginal */
function AmazonwebservicesOriginal({ width, height, className }) {
  return (
    <SVGDeviconInline
      className={'AmazonwebservicesOriginal' + ' ' + className}
      iconSVG={iconSVG}
      width={width}
      height={height}
    />
  )
}

AmazonwebservicesOriginal.propTypes = {
  className: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default AmazonwebservicesOriginal
