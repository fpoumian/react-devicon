import React from 'react'
import PropTypes from 'prop-types'
import SVGDeviconInline from '../../_base/SVGDeviconInline'

import iconSVG from './PostgresqlPlain.svg'

/** PostgresqlPlain */
function PostgresqlPlain({ width, height, className }) {
  return (
    <SVGDeviconInline
      className={'PostgresqlPlain' + ' ' + className}
      iconSVG={iconSVG}
      width={width}
      height={height}
    />
  )
}

PostgresqlPlain.propTypes = {
  className: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default PostgresqlPlain
