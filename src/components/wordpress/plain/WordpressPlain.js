import React from 'react'
import PropTypes from 'prop-types'
import SVGInline from 'react-svg-inline'
import iconSVG from './WordpressPlain.svg'
import { normalizeUnit } from '../../utils.js'

/** WordpressPlain */
function WordpressPlain({ width, height }) {
  return (
    <SVGInline
      classSuffix="-devicon"
      className="WordpressPlain"
      svg={iconSVG}
      width={normalizeUnit(width)}
      height={normalizeUnit(height)}
    />
  )
}

WordpressPlain.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default WordpressPlain
