import React from 'react'
import PropTypes from 'prop-types'
import SVGDeviconInline from '../../_base/SVGDeviconInline'

import iconSVG from './PostgresqlPlainWordmark.svg'

/** PostgresqlPlainWordmark */
function PostgresqlPlainWordmark({ width, height, className }) {
  return (
    <SVGDeviconInline
      className={'PostgresqlPlainWordmark' + ' ' + className}
      iconSVG={iconSVG}
      width={width}
      height={height}
    />
  )
}

PostgresqlPlainWordmark.propTypes = {
  className: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default PostgresqlPlainWordmark
