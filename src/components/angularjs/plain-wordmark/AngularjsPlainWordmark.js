
import React from 'react'
import PropTypes from 'prop-types'
import SVGInline from 'react-svg-inline'
import iconSVG from './AngularjsPlainWordmark.svg'
import { normalizeUnit } from '../../utils.js'

/** AngularjsPlainWordmark */
function AngularjsPlainWordmark({width, height}) {
  return (
     <SVGInline
      classSuffix="-devicon"
      className="AngularjsPlainWordmark"
      svg={iconSVG}
      width={normalizeUnit(width)}
      height={normalizeUnit(height)}
    />
  )
}

AngularjsPlainWordmark.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default AngularjsPlainWordmark
