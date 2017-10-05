import React from 'react'
import PropTypes from 'prop-types'
import SVGDeviconInline from '../../_base/SVGDeviconInline'

import iconSVG from './DjangoOriginal.svg'

/** DjangoOriginal */
function DjangoOriginal({ width, height, className }) {
  return (
    <SVGDeviconInline
      className={'DjangoOriginal' + ' ' + className}
      iconSVG={iconSVG}
      width={width}
      height={height}
    />
  )
}

DjangoOriginal.propTypes = {
  className: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default DjangoOriginal
