
import React from 'react'
import PropTypes from 'prop-types'
import SVGInline from 'react-svg-inline'
import iconSVG from './D3jsOriginal.svg'
import { normalizeUnit } from '../../utils.js'

/** D3jsOriginal */
function D3jsOriginal({width, height}) {
  return (
     <SVGInline
      classSuffix="-devicon"
      className="D3jsOriginal"
      svg={iconSVG}
      width={normalizeUnit(width)}
      height={normalizeUnit(height)}
    />
  )
}

D3jsOriginal.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default D3jsOriginal
