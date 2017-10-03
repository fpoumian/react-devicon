import React from 'react'
import PropTypes from 'prop-types'
import SVGInline from 'react-svg-inline'
import iconSVG from './JetbrainsPlain.svg'
import { normalizeUnit } from '../../utils.js'

/** JetbrainsPlain */
function JetbrainsPlain({ width, height }) {
  return (
    <SVGInline
      classSuffix="-devicon"
      className="JetbrainsPlain"
      svg={iconSVG}
      width={normalizeUnit(width)}
      height={normalizeUnit(height)}
    />
  )
}

JetbrainsPlain.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default JetbrainsPlain
