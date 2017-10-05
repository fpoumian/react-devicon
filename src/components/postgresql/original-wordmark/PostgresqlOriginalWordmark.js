import React from 'react'
import PropTypes from 'prop-types'
import SVGDeviconInline from '../../_base/SVGDeviconInline'

import iconSVG from './PostgresqlOriginalWordmark.svg'

/** PostgresqlOriginalWordmark */
function PostgresqlOriginalWordmark({ width, height, className }) {
  return (
    <SVGDeviconInline
      className={'PostgresqlOriginalWordmark' + ' ' + className}
      iconSVG={iconSVG}
      width={width}
      height={height}
    />
  )
}

PostgresqlOriginalWordmark.propTypes = {
  className: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default PostgresqlOriginalWordmark
