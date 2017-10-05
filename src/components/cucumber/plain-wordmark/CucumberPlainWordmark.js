import React from 'react'
import PropTypes from 'prop-types'
import SVGDeviconInline from '../../_base/SVGDeviconInline'

import iconSVG from './CucumberPlainWordmark.svg'

/** CucumberPlainWordmark */
function CucumberPlainWordmark({ width, height, className }) {
  return (
    <SVGDeviconInline
      className={'CucumberPlainWordmark' + ' ' + className}
      iconSVG={iconSVG}
      width={width}
      height={height}
    />
  )
}

CucumberPlainWordmark.propTypes = {
  className: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default CucumberPlainWordmark
