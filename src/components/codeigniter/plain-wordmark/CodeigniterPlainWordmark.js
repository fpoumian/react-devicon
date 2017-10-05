import React from 'react'
import PropTypes from 'prop-types'
import SVGDeviconInline from '../../_base/SVGDeviconInline'

import iconSVG from './CodeigniterPlainWordmark.svg'

/** CodeigniterPlainWordmark */
function CodeigniterPlainWordmark({ width, height, className }) {
  return (
    <SVGDeviconInline
      className={'CodeigniterPlainWordmark' + ' ' + className}
      iconSVG={iconSVG}
      width={width}
      height={height}
    />
  )
}

CodeigniterPlainWordmark.propTypes = {
  className: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default CodeigniterPlainWordmark
