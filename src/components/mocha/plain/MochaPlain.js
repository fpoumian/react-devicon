import React from 'react'
import PropTypes from 'prop-types'
import SVGInline from 'react-svg-inline'
import iconSVG from './MochaPlain.svg'
import { normalizeUnit } from '../../utils.js'

/** MochaPlain */
function MochaPlain({ width, height }) {
  return (
    <SVGInline
      classSuffix="-devicon"
      className="MochaPlain"
      svg={iconSVG}
      width={normalizeUnit(width)}
      height={normalizeUnit(height)}
    />
  )
}

MochaPlain.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default MochaPlain
