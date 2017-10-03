
import React from 'react'
import PropTypes from 'prop-types'
import SVGInline from 'react-svg-inline'
import iconSVG from './PhpstormPlain.svg'
import { normalizeUnit } from '../../utils.js'

/** PhpstormPlain */
function PhpstormPlain({width, height}) {
  return (
     <SVGInline
      classSuffix="-devicon"
      className="PhpstormPlain"
      svg={iconSVG}
      width={normalizeUnit(width)}
      height={normalizeUnit(height)}
    />
  )
}

PhpstormPlain.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default PhpstormPlain
