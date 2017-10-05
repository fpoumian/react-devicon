import React from 'react'
import PropTypes from 'prop-types'
import SVGDeviconInline from '../../_base/SVGDeviconInline'

import iconSVG from './MongodbOriginalWordmark.svg'

/** MongodbOriginalWordmark */
function MongodbOriginalWordmark({ width, height, className }) {
  return (
    <SVGDeviconInline
      className={'MongodbOriginalWordmark' + ' ' + className}
      iconSVG={iconSVG}
      width={width}
      height={height}
    />
  )
}

MongodbOriginalWordmark.propTypes = {
  className: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default MongodbOriginalWordmark
