import React from 'react'
import PropTypes from 'prop-types'
import SVGDeviconInline from '../../_base/SVGDeviconInline'

import iconSVG from './RedhatPlainWordmark.svg'

/** RedhatPlainWordmark */
function RedhatPlainWordmark({ width, height, className }) {
  return (
    <SVGDeviconInline
      className={'RedhatPlainWordmark' + ' ' + className}
      iconSVG={iconSVG}
      width={width}
      height={height}
    />
  )
}

RedhatPlainWordmark.propTypes = {
  className: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default RedhatPlainWordmark
