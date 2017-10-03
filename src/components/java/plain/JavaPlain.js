import React from 'react'
import PropTypes from 'prop-types'
import SVGInline from 'react-svg-inline'
import iconSVG from './JavaPlain.svg'
import { normalizeUnit } from '../../utils.js'

/** JavaPlain */
function JavaPlain({ width, height }) {
  return (
    <SVGInline
      classSuffix="-devicon"
      className="JavaPlain"
      svg={iconSVG}
      width={normalizeUnit(width)}
      height={normalizeUnit(height)}
    />
  )
}

JavaPlain.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default JavaPlain
