
import React from 'react'
import PropTypes from 'prop-types'
import SVGInline from 'react-svg-inline'
import iconSVG from './PycharmPlain.svg'
import { normalizeUnit } from '../../utils.js'

/** PycharmPlain */
function PycharmPlain({width, height}) {
  return (
     <SVGInline
      classSuffix="-devicon"
      className="PycharmPlain"
      svg={iconSVG}
      width={normalizeUnit(width)}
      height={normalizeUnit(height)}
    />
  )
}

PycharmPlain.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default PycharmPlain
