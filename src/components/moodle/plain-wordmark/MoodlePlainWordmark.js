import React from 'react'
import PropTypes from 'prop-types'
import SVGDeviconInline from '../../_base/SVGDeviconInline'

import iconSVG from './MoodlePlainWordmark.svg'

/** MoodlePlainWordmark */
function MoodlePlainWordmark({ width, height, className }) {
  return (
    <SVGDeviconInline
      className={'MoodlePlainWordmark' + ' ' + className}
      iconSVG={iconSVG}
      width={width}
      height={height}
    />
  )
}

MoodlePlainWordmark.propTypes = {
  className: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default MoodlePlainWordmark
