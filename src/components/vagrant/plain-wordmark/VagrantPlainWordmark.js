import React from 'react'
import PropTypes from 'prop-types'
import SVGDeviconInline from '../../_base/SVGDeviconInline'

import iconSVG from './VagrantPlainWordmark.svg'

/** VagrantPlainWordmark */
function VagrantPlainWordmark({ width, height, className }) {
  return (
    <SVGDeviconInline
      className={'VagrantPlainWordmark' + ' ' + className}
      iconSVG={iconSVG}
      width={width}
      height={height}
    />
  )
}

VagrantPlainWordmark.propTypes = {
  className: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default VagrantPlainWordmark
