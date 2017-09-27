
import React from 'react'
import PropTypes from 'prop-types'
import SVGInline from 'react-svg-inline'
import iconSVG from './ProtractorPlain.svg'
import { normalizeUnit } from '../../utils.js'

/** ProtractorPlain */
function ProtractorPlain({width, height}) {
  return (
     <SVGInline
      classSuffix="-devicon"
      className="ProtractorPlain"
      svg={iconSVG}
      width={normalizeUnit(width)}
      height={normalizeUnit(height)}
    />
  )
}

ProtractorPlain.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default ProtractorPlain
