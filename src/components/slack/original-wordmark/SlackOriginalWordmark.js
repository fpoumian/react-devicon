import React from 'react'
import PropTypes from 'prop-types'
import SVGDeviconInline from '../../_base/SVGDeviconInline'

import iconSVG from './SlackOriginalWordmark.svg'

/** SlackOriginalWordmark */
function SlackOriginalWordmark({ width, height, className }) {
  return (
    <SVGDeviconInline
      className={'SlackOriginalWordmark' + ' ' + className}
      iconSVG={iconSVG}
      width={width}
      height={height}
    />
  )
}

SlackOriginalWordmark.propTypes = {
  className: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default SlackOriginalWordmark
