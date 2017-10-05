import React from 'react'
import PropTypes from 'prop-types'
import SVGDeviconInline from '../../_base/SVGDeviconInline'

import iconSVG from './AngularjsPlainWordmark.svg'

/** AngularjsPlainWordmark */
function AngularjsPlainWordmark({ width, height, className }) {
  return (
    <SVGDeviconInline
      className={'AngularjsPlainWordmark' + ' ' + className}
      iconSVG={iconSVG}
      width={width}
      height={height}
    />
  )
}

AngularjsPlainWordmark.propTypes = {
  className: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default AngularjsPlainWordmark
