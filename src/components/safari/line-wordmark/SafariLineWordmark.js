import React from 'react'
import PropTypes from 'prop-types'
import SVGDeviconInline from '../../_base/SVGDeviconInline'

import iconSVG from './SafariLineWordmark.svg'

/** SafariLineWordmark */
function SafariLineWordmark({ width, height, className }) {
  return (
    <SVGDeviconInline
      className={'SafariLineWordmark' + ' ' + className}
      iconSVG={iconSVG}
      width={width}
      height={height}
    />
  )
}

SafariLineWordmark.propTypes = {
  className: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default SafariLineWordmark
