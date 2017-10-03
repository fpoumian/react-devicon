
import React from 'react'
import PropTypes from 'prop-types'
import SVGInline from 'react-svg-inline'
import iconSVG from './Windows8Original.svg'
import { normalizeUnit } from '../../utils.js'

/** Windows8Original */
function Windows8Original({width, height}) {
  return (
     <SVGInline
      classSuffix="-devicon"
      className="Windows8Original"
      svg={iconSVG}
      width={normalizeUnit(width)}
      height={normalizeUnit(height)}
    />
  )
}

Windows8Original.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default Windows8Original
