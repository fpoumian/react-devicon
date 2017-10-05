import React from 'react'
import PropTypes from 'prop-types'
import SVGDeviconInline from '../../_base/SVGDeviconInline'

import iconSVG from './GitlabPlainWordmark.svg'

/** GitlabPlainWordmark */
function GitlabPlainWordmark({ width, height, className }) {
  return (
    <SVGDeviconInline
      className={'GitlabPlainWordmark' + ' ' + className}
      iconSVG={iconSVG}
      width={width}
      height={height}
    />
  )
}

GitlabPlainWordmark.propTypes = {
  className: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default GitlabPlainWordmark
