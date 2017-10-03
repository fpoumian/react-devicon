
import React from 'react'
import PropTypes from 'prop-types'
import SVGInline from 'react-svg-inline'
import iconSVG from './GatlingPlain.svg'
import { normalizeUnit } from '../../utils.js'

/** GatlingPlain */
function GatlingPlain({width, height}) {
  return (
     <SVGInline
      classSuffix="-devicon"
      className="GatlingPlain"
      svg={iconSVG}
      width={normalizeUnit(width)}
      height={normalizeUnit(height)}
    />
  )
}

GatlingPlain.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default GatlingPlain
