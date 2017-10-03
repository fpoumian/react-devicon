import React from 'react'
import PropTypes from 'prop-types'
import SVGInline from 'react-svg-inline'
import iconSVG from './AndroidPlain.svg'
import { normalizeUnit } from '../../utils.js'

/** AndroidPlain */
function AndroidPlain({ width, height }) {
  return (
    <SVGInline
      classSuffix="-devicon"
      className="AndroidPlain"
      svg={iconSVG}
      width={normalizeUnit(width)}
      height={normalizeUnit(height)}
    />
  )
}

AndroidPlain.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default AndroidPlain
