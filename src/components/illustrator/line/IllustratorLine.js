import React from 'react'
import PropTypes from 'prop-types'
import SVGDeviconInline from '../../_base/SVGDeviconInline'

import iconSVG from './IllustratorLine.svg'

/** IllustratorLine */
function IllustratorLine({ width, height, className }) {
  return (
    <SVGDeviconInline
      className={'IllustratorLine' + ' ' + className}
      iconSVG={iconSVG}
      width={width}
      height={height}
    />
  )
}

IllustratorLine.propTypes = {
  className: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default IllustratorLine
