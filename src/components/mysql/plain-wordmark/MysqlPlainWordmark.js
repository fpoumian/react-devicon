import React from 'react'
import PropTypes from 'prop-types'
import SVGDeviconInline from '../../_base/SVGDeviconInline'

import iconSVG from './MysqlPlainWordmark.svg'

/** MysqlPlainWordmark */
function MysqlPlainWordmark({ width, height, className }) {
  return (
    <SVGDeviconInline
      className={'MysqlPlainWordmark' + ' ' + className}
      iconSVG={iconSVG}
      width={width}
      height={height}
    />
  )
}

MysqlPlainWordmark.propTypes = {
  className: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default MysqlPlainWordmark
