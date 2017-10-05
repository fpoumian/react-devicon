import React from 'react'
import PropTypes from 'prop-types'
import SVGDeviconInline from '../../_base/SVGDeviconInline'

import iconSVG from './TrelloPlainWordmark.svg'

/** TrelloPlainWordmark */
function TrelloPlainWordmark({ width, height, className }) {
  return (
    <SVGDeviconInline
      className={'TrelloPlainWordmark' + ' ' + className}
      iconSVG={iconSVG}
      width={width}
      height={height}
    />
  )
}

TrelloPlainWordmark.propTypes = {
  className: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default TrelloPlainWordmark
