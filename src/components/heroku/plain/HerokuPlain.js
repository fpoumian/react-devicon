
import React from 'react'
import PropTypes from 'prop-types'
import SVGInline from 'react-svg-inline'
import iconSVG from './HerokuPlain.svg'
import { normalizeUnit } from '../../utils.js'

/** HerokuPlain */
function HerokuPlain({width, height}) {
  return (
     <SVGInline
      classSuffix="-devicon"
      className="HerokuPlain"
      svg={iconSVG}
      width={normalizeUnit(width)}
      height={normalizeUnit(height)}
    />
  )
}

HerokuPlain.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default HerokuPlain
