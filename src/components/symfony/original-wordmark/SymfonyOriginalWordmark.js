import React from 'react'
import PropTypes from 'prop-types'
import SVGDeviconInline from '../../_base/SVGDeviconInline'

import iconSVG from './SymfonyOriginalWordmark.svg'

/** SymfonyOriginalWordmark */
function SymfonyOriginalWordmark({ width, height, className }) {
  return (
    <SVGDeviconInline
      className={'SymfonyOriginalWordmark' + ' ' + className}
      iconSVG={iconSVG}
      width={width}
      height={height}
    />
  )
}

SymfonyOriginalWordmark.propTypes = {
  className: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default SymfonyOriginalWordmark
