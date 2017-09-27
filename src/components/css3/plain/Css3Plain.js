
import React from 'react'
import PropTypes from 'prop-types'
import SVGInline from 'react-svg-inline'
import iconSVG from './Css3Plain.svg'
import { normalizeUnit } from '../../utils.js'

/** Css3Plain */
function Css3Plain({width, height}) {
  return (
     <SVGInline
      classSuffix="-devicon"
      className="Css3Plain"
      svg={iconSVG}
      width={normalizeUnit(width)}
      height={normalizeUnit(height)}
    />
  )
}

Css3Plain.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default Css3Plain
