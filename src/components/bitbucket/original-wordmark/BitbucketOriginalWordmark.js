import React from 'react'
import PropTypes from 'prop-types'
import SVGDeviconInline from '../../_base/SVGDeviconInline'

import iconSVG from './BitbucketOriginalWordmark.svg'

/** BitbucketOriginalWordmark */
function BitbucketOriginalWordmark({ width, height, className }) {
  return (
    <SVGDeviconInline
      className={'BitbucketOriginalWordmark' + ' ' + className}
      iconSVG={iconSVG}
      width={width}
      height={height}
    />
  )
}

BitbucketOriginalWordmark.propTypes = {
  className: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default BitbucketOriginalWordmark
