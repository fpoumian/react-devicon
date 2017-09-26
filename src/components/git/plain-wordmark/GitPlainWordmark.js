
import React from 'react'
import PropTypes from 'prop-types'
import SVGInline from 'react-svg-inline'
import iconSVG from './GitPlainWordmark.svg'
import { normalizeUnit } from '../../../utils.js'

/** GitPlainWordmark */
function GitPlainWordmark({width, height}) {
  return (
     <SVGInline
      svg={iconSVG}
      width={normalizeUnit(width)}
      height={normalizeUnit(height)}
    />
  )
}

GitPlainWordmark.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default GitPlainWordmark