import React from 'react'
import PropTypes from 'prop-types'
import SVGDeviconInline from '../../_base/SVGDeviconInline'

import iconSVG from './MongodbPlainWordmark.svg'

/** MongodbPlainWordmark */
function MongodbPlainWordmark({ width, height, className }) {
  return (
    <SVGDeviconInline
      className={'MongodbPlainWordmark' + ' ' + className}
      iconSVG={iconSVG}
      width={width}
      height={height}
    />
  )
}

MongodbPlainWordmark.propTypes = {
  className: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default MongodbPlainWordmark
