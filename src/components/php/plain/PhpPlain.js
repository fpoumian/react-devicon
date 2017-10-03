
import React from 'react'
import PropTypes from 'prop-types'
import SVGInline from 'react-svg-inline'
import iconSVG from './PhpPlain.svg'
import { normalizeUnit } from '../../utils.js'

/** PhpPlain */
function PhpPlain({width, height}) {
  return (
     <SVGInline
      classSuffix="-devicon"
      className="PhpPlain"
      svg={iconSVG}
      width={normalizeUnit(width)}
      height={normalizeUnit(height)}
    />
  )
}

PhpPlain.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default PhpPlain
