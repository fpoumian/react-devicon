
import React from 'react'
import PropTypes from 'prop-types'
import SVGInline from 'react-svg-inline'
import iconSVG from './FoundationPlain.svg'
import { normalizeUnit } from '../../utils.js'

/** FoundationPlain */
function FoundationPlain({width, height}) {
  return (
     <SVGInline
      classSuffix="-devicon"
      className="FoundationPlain"
      svg={iconSVG}
      width={normalizeUnit(width)}
      height={normalizeUnit(height)}
    />
  )
}

FoundationPlain.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default FoundationPlain
