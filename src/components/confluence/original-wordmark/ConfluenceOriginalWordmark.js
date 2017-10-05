import React from 'react'
import PropTypes from 'prop-types'
import SVGDeviconInline from '../../_base/SVGDeviconInline'

import iconSVG from './ConfluenceOriginalWordmark.svg'

/** ConfluenceOriginalWordmark */
function ConfluenceOriginalWordmark({ width, height, className }) {
  return (
    <SVGDeviconInline
      className={'ConfluenceOriginalWordmark' + ' ' + className}
      iconSVG={iconSVG}
      width={width}
      height={height}
    />
  )
}

ConfluenceOriginalWordmark.propTypes = {
  className: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default ConfluenceOriginalWordmark
