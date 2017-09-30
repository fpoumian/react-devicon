import React from 'react'
import PropTypes from 'prop-types'
import SVGInline from 'react-svg-inline'
import iconSVG from './MeteorPlainWordmark.svg'
import { normalizeUnit } from '../../utils.js'

/** MeteorPlainWordmark */
function MeteorPlainWordmark({ width, height }) {
  return (
    <SVGInline
      classSuffix="-devicon"
      className="MeteorPlainWordmark"
      svg={iconSVG}
      width={normalizeUnit(width)}
      height={normalizeUnit(height)}
    />
  )
}

MeteorPlainWordmark.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default MeteorPlainWordmark
