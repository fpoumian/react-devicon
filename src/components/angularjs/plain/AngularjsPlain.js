import React from 'react'
import PropTypes from 'prop-types'
import SVGInline from 'react-svg-inline'
import iconSVG from './AngularjsPlain.svg'
import { normalizeUnit } from '../../utils.js'

/** AngularjsPlain */
function AngularjsPlain({ width, height }) {
  return (
    <SVGInline
      classSuffix="-devicon"
      className="AngularjsPlain"
      svg={iconSVG}
      width={normalizeUnit(width)}
      height={normalizeUnit(height)}
    />
  )
}

AngularjsPlain.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default AngularjsPlain
