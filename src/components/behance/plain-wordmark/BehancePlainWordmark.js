
import React from 'react'
import PropTypes from 'prop-types'
import SVGInline from 'react-svg-inline'
import iconSVG from './BehancePlainWordmark.svg'
import { normalizeUnit } from '../../utils.js'

/** BehancePlainWordmark */
function BehancePlainWordmark({width, height}) {
  return (
     <SVGInline
      classSuffix="-devicon"
      className="BehancePlainWordmark"
      svg={iconSVG}
      width={normalizeUnit(width)}
      height={normalizeUnit(height)}
    />
  )
}

BehancePlainWordmark.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default BehancePlainWordmark
