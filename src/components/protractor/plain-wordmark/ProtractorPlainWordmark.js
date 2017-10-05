import React from 'react'
import PropTypes from 'prop-types'
import SVGDeviconInline from '../../_base/SVGDeviconInline'

import iconSVG from './ProtractorPlainWordmark.svg'

/** ProtractorPlainWordmark */
function ProtractorPlainWordmark({ width, height, className }) {
  return (
    <SVGDeviconInline
      className={'ProtractorPlainWordmark' + ' ' + className}
      iconSVG={iconSVG}
      width={width}
      height={height}
    />
  )
}

ProtractorPlainWordmark.propTypes = {
  className: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default ProtractorPlainWordmark
