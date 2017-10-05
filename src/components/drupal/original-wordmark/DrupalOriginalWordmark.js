import React from 'react'
import PropTypes from 'prop-types'
import SVGDeviconInline from '../../_base/SVGDeviconInline'

import iconSVG from './DrupalOriginalWordmark.svg'

/** DrupalOriginalWordmark */
function DrupalOriginalWordmark({ width, height, className }) {
  return (
    <SVGDeviconInline
      className={'DrupalOriginalWordmark' + ' ' + className}
      iconSVG={iconSVG}
      width={width}
      height={height}
    />
  )
}

DrupalOriginalWordmark.propTypes = {
  className: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default DrupalOriginalWordmark
