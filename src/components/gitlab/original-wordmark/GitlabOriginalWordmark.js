import React from 'react'
import PropTypes from 'prop-types'
import SVGDeviconInline from '../../_base/SVGDeviconInline'

import iconSVG from './GitlabOriginalWordmark.svg'

/** GitlabOriginalWordmark */
function GitlabOriginalWordmark({ width, height, className }) {
  return (
    <SVGDeviconInline
      className={'GitlabOriginalWordmark' + ' ' + className}
      iconSVG={iconSVG}
      width={width}
      height={height}
    />
  )
}

GitlabOriginalWordmark.propTypes = {
  className: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default GitlabOriginalWordmark
