import React from 'react'
import PropTypes from 'prop-types'
import SVGDeviconInline from '../../_base/SVGDeviconInline'

import iconSVG from './ConfluenceOriginal.svg'

/** ConfluenceOriginal */
function ConfluenceOriginal({ width, height, className }) {
  return (
    <SVGDeviconInline
      className={'ConfluenceOriginal' + ' ' + className}
      iconSVG={iconSVG}
      width={width}
      height={height}
    />
  )
}

ConfluenceOriginal.propTypes = {
  className: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default ConfluenceOriginal
