import React from 'react'
import PropTypes from 'prop-types'
import SVGDeviconInline from '../../_base/SVGDeviconInline'

import iconSVG from './SourcetreeOriginal.svg'

/** SourcetreeOriginal */
function SourcetreeOriginal({ width, height, className }) {
  return (
    <SVGDeviconInline
      className={'SourcetreeOriginal' + ' ' + className}
      iconSVG={iconSVG}
      width={width}
      height={height}
    />
  )
}

SourcetreeOriginal.propTypes = {
  className: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default SourcetreeOriginal
