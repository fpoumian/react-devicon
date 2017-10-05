import React from 'react'
import PropTypes from 'prop-types'
import SVGDeviconInline from '../../_base/SVGDeviconInline'

import iconSVG from './CPlain.svg'

/** CPlain */
function CPlain({ width, height, className }) {
  return (
    <SVGDeviconInline
      className={'CPlain' + ' ' + className}
      iconSVG={iconSVG}
      width={width}
      height={height}
    />
  )
}

CPlain.propTypes = {
  className: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default CPlain
