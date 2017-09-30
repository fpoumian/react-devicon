import React from 'react'
import PropTypes from 'prop-types'
import SVGInline from 'react-svg-inline'
import iconSVG from './WebstormPlain.svg'
import { normalizeUnit } from '../../utils.js'

/** WebstormPlain */
function WebstormPlain({ width, height }) {
  return (
    <SVGInline
      classSuffix="-devicon"
      className="WebstormPlain"
      svg={iconSVG}
      width={normalizeUnit(width)}
      height={normalizeUnit(height)}
    />
  )
}

WebstormPlain.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default WebstormPlain
