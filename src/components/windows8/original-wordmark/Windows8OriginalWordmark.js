import React from 'react'
import PropTypes from 'prop-types'
import SVGDeviconInline from '../../_base/SVGDeviconInline'

import iconSVG from './Windows8OriginalWordmark.svg'

/** Windows8OriginalWordmark */
function Windows8OriginalWordmark({ width, height, className }) {
  return (
    <SVGDeviconInline
      className={'Windows8OriginalWordmark' + ' ' + className}
      iconSVG={iconSVG}
      width={width}
      height={height}
    />
  )
}

Windows8OriginalWordmark.propTypes = {
  className: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default Windows8OriginalWordmark
