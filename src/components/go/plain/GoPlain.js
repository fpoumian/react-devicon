import React from 'react'
import PropTypes from 'prop-types'
import SVGInline from 'react-svg-inline'
import iconSVG from './GoPlain.svg'
import { normalizeUnit } from '../../utils.js'

/** GoPlain */
function GoPlain({ width, height }) {
  return (
    <SVGInline
      classSuffix="-devicon"
      className="GoPlain"
      svg={iconSVG}
      width={normalizeUnit(width)}
      height={normalizeUnit(height)}
    />
  )
}

GoPlain.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default GoPlain
