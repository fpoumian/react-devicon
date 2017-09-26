
import React from 'react'
import PropTypes from 'prop-types'
import SVGInline from 'react-svg-inline'
import iconSVG from './LinkedinPlainWordmark.svg'
import { normalizeUnit } from '../../../utils.js'

/** LinkedinPlainWordmark */
function LinkedinPlainWordmark({width, height}) {
  return (
     <SVGInline
      svg={iconSVG}
      width={normalizeUnit(width)}
      height={normalizeUnit(height)}
    />
  )
}

LinkedinPlainWordmark.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default LinkedinPlainWordmark
