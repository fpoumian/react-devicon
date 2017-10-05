import React from 'react'
import PropTypes from 'prop-types'
import SVGDeviconInline from '../../_base/SVGDeviconInline'

import iconSVG from './DrupalPlainWordmark.svg'

/** DrupalPlainWordmark */
function DrupalPlainWordmark({ width, height, className }) {
  return (
    <SVGDeviconInline
      className={'DrupalPlainWordmark' + ' ' + className}
      iconSVG={iconSVG}
      width={width}
      height={height}
    />
  )
}

DrupalPlainWordmark.propTypes = {
  className: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default DrupalPlainWordmark
