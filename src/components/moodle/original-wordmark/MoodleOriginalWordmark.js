import React from 'react'
import PropTypes from 'prop-types'
import SVGDeviconInline from '../../_base/SVGDeviconInline'

import iconSVG from './MoodleOriginalWordmark.svg'

/** MoodleOriginalWordmark */
function MoodleOriginalWordmark({ width, height, className }) {
  return (
    <SVGDeviconInline
      className={'MoodleOriginalWordmark' + ' ' + className}
      iconSVG={iconSVG}
      width={width}
      height={height}
    />
  )
}

MoodleOriginalWordmark.propTypes = {
  className: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default MoodleOriginalWordmark
