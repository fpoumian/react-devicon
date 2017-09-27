
import React from 'react'
import PropTypes from 'prop-types'
import SVGInline from 'react-svg-inline'
import iconSVG from './CeylonPlainWordmark.svg'
import { normalizeUnit } from '../../utils.js'

/** CeylonPlainWordmark */
function CeylonPlainWordmark({width, height}) {
  return (
     <SVGInline
      classSuffix="-devicon"
      className="CeylonPlainWordmark"
      svg={iconSVG}
      width={normalizeUnit(width)}
      height={normalizeUnit(height)}
    />
  )
}

CeylonPlainWordmark.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default CeylonPlainWordmark
