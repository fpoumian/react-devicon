import React from 'react'
import PropTypes from 'prop-types'
import SVGDeviconInline from '../../_base/SVGDeviconInline'

import iconSVG from './Html5PlainWordmark.svg'

/** Html5PlainWordmark */
function Html5PlainWordmark({ width, height, className }) {
  return (
    <SVGDeviconInline
      className={'Html5PlainWordmark' + ' ' + className}
      iconSVG={iconSVG}
      width={width}
      height={height}
    />
  )
}

Html5PlainWordmark.propTypes = {
  className: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default Html5PlainWordmark
