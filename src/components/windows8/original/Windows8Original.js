import React from 'react'
import PropTypes from 'prop-types'
import SVGDeviconInline from '../../_base/SVGDeviconInline'

import iconSVG from './Windows8Original.svg'

/** Windows8Original */
function Windows8Original({ width, height, className }) {
  return (
    <SVGDeviconInline
      className={'Windows8Original' + ' ' + className}
      iconSVG={iconSVG}
      width={width}
      height={height}
    />
  )
}

Windows8Original.propTypes = {
  className: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default Windows8Original
