import React from 'react'
import PropTypes from 'prop-types'
import SVGDeviconInline from '../../_base/SVGDeviconInline'

import iconSVG from './PhpstormPlainWordmark.svg'

/** PhpstormPlainWordmark */
function PhpstormPlainWordmark({ width, height, className }) {
  return (
    <SVGDeviconInline
      className={'PhpstormPlainWordmark' + ' ' + className}
      iconSVG={iconSVG}
      width={width}
      height={height}
    />
  )
}

PhpstormPlainWordmark.propTypes = {
  className: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default PhpstormPlainWordmark
