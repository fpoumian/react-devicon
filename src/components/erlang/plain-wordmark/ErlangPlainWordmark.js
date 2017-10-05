import React from 'react'
import PropTypes from 'prop-types'
import SVGDeviconInline from '../../_base/SVGDeviconInline'

import iconSVG from './ErlangPlainWordmark.svg'

/** ErlangPlainWordmark */
function ErlangPlainWordmark({ width, height, className }) {
  return (
    <SVGDeviconInline
      className={'ErlangPlainWordmark' + ' ' + className}
      iconSVG={iconSVG}
      width={width}
      height={height}
    />
  )
}

ErlangPlainWordmark.propTypes = {
  className: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default ErlangPlainWordmark
