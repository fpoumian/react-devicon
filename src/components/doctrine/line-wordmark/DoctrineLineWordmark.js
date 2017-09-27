
import React from 'react'
import PropTypes from 'prop-types'
import SVGInline from 'react-svg-inline'
import iconSVG from './DoctrineLineWordmark.svg'
import { normalizeUnit } from '../../utils.js'

/** DoctrineLineWordmark */
function DoctrineLineWordmark({width, height}) {
  return (
     <SVGInline
      classSuffix="-devicon"
      className="DoctrineLineWordmark"
      svg={iconSVG}
      width={normalizeUnit(width)}
      height={normalizeUnit(height)}
    />
  )
}

DoctrineLineWordmark.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default DoctrineLineWordmark
