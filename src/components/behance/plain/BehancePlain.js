import React from 'react'
import PropTypes from 'prop-types'
import SVGInline from 'react-svg-inline'
import iconSVG from './BehancePlain.svg'
import { normalizeUnit } from '../../utils.js'

/** BehancePlain */
function BehancePlain({ width, height }) {
  return (
    <SVGInline
      classSuffix="-devicon"
      className="BehancePlain"
      svg={iconSVG}
      width={normalizeUnit(width)}
      height={normalizeUnit(height)}
    />
  )
}

BehancePlain.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default BehancePlain
