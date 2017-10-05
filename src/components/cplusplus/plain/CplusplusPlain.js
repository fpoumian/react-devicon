import React from 'react'
import PropTypes from 'prop-types'
import SVGDeviconInline from '../../_base/SVGDeviconInline'

import iconSVG from './CplusplusPlain.svg'

/** CplusplusPlain */
function CplusplusPlain({ width, height, className }) {
  return (
    <SVGDeviconInline
      className={'CplusplusPlain' + ' ' + className}
      iconSVG={iconSVG}
      width={width}
      height={height}
    />
  )
}

CplusplusPlain.propTypes = {
  className: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default CplusplusPlain
