
import React from 'react'
import PropTypes from 'prop-types'
import SVGInline from 'react-svg-inline'
import iconSVG from './DrupalPlainWordmark.svg'
import { normalizeUnit } from '../../utils.js'

/** DrupalPlainWordmark */
function DrupalPlainWordmark({width, height}) {
  return (
     <SVGInline
      classSuffix="-devicon"
      className="DrupalPlainWordmark"
      svg={iconSVG}
      width={normalizeUnit(width)}
      height={normalizeUnit(height)}
    />
  )
}

DrupalPlainWordmark.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default DrupalPlainWordmark
