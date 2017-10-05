import React from 'react'
import PropTypes from 'prop-types'
import SVGDeviconInline from '../../_base/SVGDeviconInline'

import iconSVG from './JqueryOriginalWordmark.svg'

/** JqueryOriginalWordmark */
function JqueryOriginalWordmark({ width, height, className }) {
  return (
    <SVGDeviconInline
      className={'JqueryOriginalWordmark' + ' ' + className}
      iconSVG={iconSVG}
      width={width}
      height={height}
    />
  )
}

JqueryOriginalWordmark.propTypes = {
  className: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default JqueryOriginalWordmark
