import React from 'react'
import PropTypes from 'prop-types'
import SVGInline from 'react-svg-inline'
import iconSVG from './JavascriptOriginal.svg'
import { normalizeUnit } from '../../utils.js'

/** JavascriptOriginal */
function JavascriptOriginal({ width, height }) {
  return (
    <SVGInline
      classSuffix="-devicon"
      className="JavascriptOriginal"
      svg={iconSVG}
      width={normalizeUnit(width)}
      height={normalizeUnit(height)}
    />
  )
}

JavascriptOriginal.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default JavascriptOriginal
