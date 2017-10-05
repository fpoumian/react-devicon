import React from 'react'
import PropTypes from 'prop-types'
import SVGDeviconInline from '../../_base/SVGDeviconInline'

import iconSVG from './CodeigniterPlain.svg'

/** CodeigniterPlain */
function CodeigniterPlain({ width, height, className }) {
  return (
    <SVGDeviconInline
      className={'CodeigniterPlain' + ' ' + className}
      iconSVG={iconSVG}
      width={width}
      height={height}
    />
  )
}

CodeigniterPlain.propTypes = {
  className: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default CodeigniterPlain
