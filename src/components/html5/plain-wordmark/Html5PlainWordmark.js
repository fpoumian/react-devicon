
import React from 'react'
import PropTypes from 'prop-types'
import SVGInline from 'react-svg-inline'
import iconSVG from './Html5PlainWordmark.svg'
import { normalizeUnit } from '../../utils.js'

/** Html5PlainWordmark */
function Html5PlainWordmark({width, height}) {
  return (
     <SVGInline
      classSuffix="-devicon"
      className="Html5PlainWordmark"
      svg={iconSVG}
      width={normalizeUnit(width)}
      height={normalizeUnit(height)}
    />
  )
}

Html5PlainWordmark.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default Html5PlainWordmark
