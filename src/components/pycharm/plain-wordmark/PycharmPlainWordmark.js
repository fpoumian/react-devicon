import React from 'react'
import PropTypes from 'prop-types'
import SVGDeviconInline from '../../_base/SVGDeviconInline'

import iconSVG from './PycharmPlainWordmark.svg'

/** PycharmPlainWordmark */
function PycharmPlainWordmark({ width, height, className }) {
  return (
    <SVGDeviconInline
      className={'PycharmPlainWordmark' + ' ' + className}
      iconSVG={iconSVG}
      width={width}
      height={height}
    />
  )
}

PycharmPlainWordmark.propTypes = {
  className: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default PycharmPlainWordmark
