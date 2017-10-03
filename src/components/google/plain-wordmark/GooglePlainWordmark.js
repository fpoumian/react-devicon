
import React from 'react'
import PropTypes from 'prop-types'
import SVGInline from 'react-svg-inline'
import iconSVG from './GooglePlainWordmark.svg'
import { normalizeUnit } from '../../utils.js'

/** GooglePlainWordmark */
function GooglePlainWordmark({width, height}) {
  return (
     <SVGInline
      classSuffix="-devicon"
      className="GooglePlainWordmark"
      svg={iconSVG}
      width={normalizeUnit(width)}
      height={normalizeUnit(height)}
    />
  )
}

GooglePlainWordmark.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default GooglePlainWordmark
