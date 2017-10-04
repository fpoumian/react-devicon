import React from 'react'
import PropTypes from 'prop-types'
import SVGInline from 'react-svg-inline'
import iconSVG from './JavascriptPlain.svg'
import { normalizeUnit } from '../../utils.js'

/** JavascriptPlain */
function JavascriptPlain({ width, height }) {
  return (
    <SVGInline
      classSuffix="-devicon"
      className="JavascriptPlain"
      svg={iconSVG}
      width={normalizeUnit(width)}
      height={normalizeUnit(height)}
    />
  )
}

JavascriptPlain.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default JavascriptPlain