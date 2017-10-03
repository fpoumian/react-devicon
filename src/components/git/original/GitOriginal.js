
import React from 'react'
import PropTypes from 'prop-types'
import SVGInline from 'react-svg-inline'
import iconSVG from './GitOriginal.svg'
import { normalizeUnit } from '../../utils.js'

/** GitOriginal */
function GitOriginal({width, height}) {
  return (
     <SVGInline
      classSuffix="-devicon"
      className="GitOriginal"
      svg={iconSVG}
      width={normalizeUnit(width)}
      height={normalizeUnit(height)}
    />
  )
}

GitOriginal.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default GitOriginal
