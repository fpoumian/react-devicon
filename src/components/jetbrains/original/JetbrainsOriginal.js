import React from 'react'
import PropTypes from 'prop-types'
import SVGDeviconInline from '../../_base/SVGDeviconInline'

import iconSVG from './JetbrainsOriginal.svg'

/** JetbrainsOriginal */
function JetbrainsOriginal({ width, height, className }) {
  return (
    <SVGDeviconInline
      className={'JetbrainsOriginal' + ' ' + className}
      iconSVG={iconSVG}
      width={width}
      height={height}
    />
  )
}

JetbrainsOriginal.propTypes = {
  className: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default JetbrainsOriginal
