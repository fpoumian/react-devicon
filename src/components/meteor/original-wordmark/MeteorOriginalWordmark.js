import React from 'react'
import PropTypes from 'prop-types'
import SVGDeviconInline from '../../_base/SVGDeviconInline'

import iconSVG from './MeteorOriginalWordmark.svg'

/** MeteorOriginalWordmark */
function MeteorOriginalWordmark({ width, height, className }) {
  return (
    <SVGDeviconInline
      className={'MeteorOriginalWordmark' + ' ' + className}
      iconSVG={iconSVG}
      width={width}
      height={height}
    />
  )
}

MeteorOriginalWordmark.propTypes = {
  className: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default MeteorOriginalWordmark
