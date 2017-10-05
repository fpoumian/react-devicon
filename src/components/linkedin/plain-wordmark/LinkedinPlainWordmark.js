import React from 'react'
import PropTypes from 'prop-types'
import SVGDeviconInline from '../../_base/SVGDeviconInline'

import iconSVG from './LinkedinPlainWordmark.svg'

/** LinkedinPlainWordmark */
function LinkedinPlainWordmark({ width, height, className }) {
  return (
    <SVGDeviconInline
      className={'LinkedinPlainWordmark' + ' ' + className}
      iconSVG={iconSVG}
      width={width}
      height={height}
    />
  )
}

LinkedinPlainWordmark.propTypes = {
  className: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default LinkedinPlainWordmark
