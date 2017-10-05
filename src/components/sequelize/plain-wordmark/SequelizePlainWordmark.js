import React from 'react'
import PropTypes from 'prop-types'
import SVGDeviconInline from '../../_base/SVGDeviconInline'

import iconSVG from './SequelizePlainWordmark.svg'

/** SequelizePlainWordmark */
function SequelizePlainWordmark({ width, height, className }) {
  return (
    <SVGDeviconInline
      className={'SequelizePlainWordmark' + ' ' + className}
      iconSVG={iconSVG}
      width={width}
      height={height}
    />
  )
}

SequelizePlainWordmark.propTypes = {
  className: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default SequelizePlainWordmark
