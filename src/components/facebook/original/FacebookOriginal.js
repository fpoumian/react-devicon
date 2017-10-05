import React from 'react'
import PropTypes from 'prop-types'
import SVGDeviconInline from '../../_base/SVGDeviconInline'

import iconSVG from './FacebookOriginal.svg'

/** FacebookOriginal */
function FacebookOriginal({ width, height, className }) {
  return (
    <SVGDeviconInline
      className={'FacebookOriginal' + ' ' + className}
      iconSVG={iconSVG}
      width={width}
      height={height}
    />
  )
}

FacebookOriginal.propTypes = {
  className: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default FacebookOriginal
