import React from 'react'
import PropTypes from 'prop-types'
import SVGDeviconInline from '../../_base/SVGDeviconInline'

import iconSVG from './WordpressPlainWordmark.svg'

/** WordpressPlainWordmark */
function WordpressPlainWordmark({ width, height, className }) {
  return (
    <SVGDeviconInline
      className={'WordpressPlainWordmark' + ' ' + className}
      iconSVG={iconSVG}
      width={width}
      height={height}
    />
  )
}

WordpressPlainWordmark.propTypes = {
  className: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default WordpressPlainWordmark
