
import React from 'react'
import PropTypes from 'prop-types'
import SVGInline from 'react-svg-inline'
import iconSVG from './ZendPlain.svg'
import { normalizeUnit } from '../../utils.js'

/** ZendPlain */
function ZendPlain({width, height}) {
  return (
     <SVGInline
      classSuffix="-devicon"
      className="ZendPlain"
      svg={iconSVG}
      width={normalizeUnit(width)}
      height={normalizeUnit(height)}
    />
  )
}

ZendPlain.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default ZendPlain
