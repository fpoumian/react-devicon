import React from 'react'
import PropTypes from 'prop-types'
import SVGInline from 'react-svg-inline'
import iconSVG from './SafariPlain.svg'
import { normalizeUnit } from '../../utils.js'

/** SafariPlain */
function SafariPlain({ width, height }) {
  return (
    <SVGInline
      classSuffix="-devicon"
      className="SafariPlain"
      svg={iconSVG}
      width={normalizeUnit(width)}
      height={normalizeUnit(height)}
    />
  )
}

SafariPlain.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default SafariPlain
