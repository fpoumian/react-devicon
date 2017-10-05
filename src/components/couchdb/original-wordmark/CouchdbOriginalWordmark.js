import React from 'react'
import PropTypes from 'prop-types'
import SVGDeviconInline from '../../_base/SVGDeviconInline'

import iconSVG from './CouchdbOriginalWordmark.svg'

/** CouchdbOriginalWordmark */
function CouchdbOriginalWordmark({ width, height, className }) {
  return (
    <SVGDeviconInline
      className={'CouchdbOriginalWordmark' + ' ' + className}
      iconSVG={iconSVG}
      width={width}
      height={height}
    />
  )
}

CouchdbOriginalWordmark.propTypes = {
  className: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default CouchdbOriginalWordmark
