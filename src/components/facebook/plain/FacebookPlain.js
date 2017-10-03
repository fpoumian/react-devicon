
import React from 'react'
import PropTypes from 'prop-types'
import SVGInline from 'react-svg-inline'
import iconSVG from './FacebookPlain.svg'
import { normalizeUnit } from '../../utils.js'

/** FacebookPlain */
function FacebookPlain({width, height}) {
  return (
     <SVGInline
      classSuffix="-devicon"
      className="FacebookPlain"
      svg={iconSVG}
      width={normalizeUnit(width)}
      height={normalizeUnit(height)}
    />
  )
}

FacebookPlain.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default FacebookPlain
