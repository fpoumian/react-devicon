import React from 'react'
import PropTypes from 'prop-types'
import SVGInline from 'react-svg-inline'
import iconSVG from './ErlangPlain.svg'
import { normalizeUnit } from '../../utils.js'

/** ErlangPlain */
function ErlangPlain({ width, height }) {
  return (
    <SVGInline
      classSuffix="-devicon"
      className="ErlangPlain"
      svg={iconSVG}
      width={normalizeUnit(width)}
      height={normalizeUnit(height)}
    />
  )
}

ErlangPlain.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default ErlangPlain
