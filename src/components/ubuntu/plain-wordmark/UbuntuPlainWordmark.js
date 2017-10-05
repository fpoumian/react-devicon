import React from 'react'
import PropTypes from 'prop-types'
import SVGDeviconInline from '../../_base/SVGDeviconInline'

import iconSVG from './UbuntuPlainWordmark.svg'

/** UbuntuPlainWordmark */
function UbuntuPlainWordmark({ width, height, className }) {
  return (
    <SVGDeviconInline
      className={'UbuntuPlainWordmark' + ' ' + className}
      iconSVG={iconSVG}
      width={width}
      height={height}
    />
  )
}

UbuntuPlainWordmark.propTypes = {
  className: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default UbuntuPlainWordmark
