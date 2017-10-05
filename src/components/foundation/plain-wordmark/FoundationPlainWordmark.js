import React from 'react'
import PropTypes from 'prop-types'
import SVGDeviconInline from '../../_base/SVGDeviconInline'

import iconSVG from './FoundationPlainWordmark.svg'

/** FoundationPlainWordmark */
function FoundationPlainWordmark({ width, height, className }) {
  return (
    <SVGDeviconInline
      className={'FoundationPlainWordmark' + ' ' + className}
      iconSVG={iconSVG}
      width={width}
      height={height}
    />
  )
}

FoundationPlainWordmark.propTypes = {
  className: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default FoundationPlainWordmark
