import React from 'react'
import PropTypes from 'prop-types'
import SVGInline from 'react-svg-inline'
import iconSVG from './ElmPlain.svg'
import { normalizeUnit } from '../../utils.js'

/** ElmPlain */
function ElmPlain({ width, height }) {
  return (
    <SVGInline
      classSuffix="-devicon"
      className="ElmPlain"
      svg={iconSVG}
      width={normalizeUnit(width)}
      height={normalizeUnit(height)}
    />
  )
}

ElmPlain.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default ElmPlain
