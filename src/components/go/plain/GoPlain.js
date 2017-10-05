import React from 'react'
import PropTypes from 'prop-types'
import SVGDeviconInline from '../../_base/SVGDeviconInline'

import iconSVG from './GoPlain.svg'

/** GoPlain */
function GoPlain({ width, height, className }) {
  return (
    <SVGDeviconInline
      className={'GoPlain' + ' ' + className}
      iconSVG={iconSVG}
      width={width}
      height={height}
    />
  )
}

GoPlain.propTypes = {
  className: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default GoPlain
