
import React from 'react'
import PropTypes from 'prop-types'
import SVGInline from 'react-svg-inline'
import iconSVG from './RedhatPlainWordmark.svg'
import { normalizeUnit } from '../../utils.js'

/** RedhatPlainWordmark */
function RedhatPlainWordmark({width, height}) {
  return (
     <SVGInline
      classSuffix="-devicon"
      className="RedhatPlainWordmark"
      svg={iconSVG}
      width={normalizeUnit(width)}
      height={normalizeUnit(height)}
    />
  )
}

RedhatPlainWordmark.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default RedhatPlainWordmark
