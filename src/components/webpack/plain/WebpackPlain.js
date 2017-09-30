import React from 'react'
import PropTypes from 'prop-types'
import SVGInline from 'react-svg-inline'
import iconSVG from './WebpackPlain.svg'
import { normalizeUnit } from '../../utils.js'

/** WebpackPlain */
function WebpackPlain({ width, height }) {
  return (
    <SVGInline
      classSuffix="-devicon"
      className="WebpackPlain"
      svg={iconSVG}
      width={normalizeUnit(width)}
      height={normalizeUnit(height)}
    />
  )
}

WebpackPlain.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default WebpackPlain
