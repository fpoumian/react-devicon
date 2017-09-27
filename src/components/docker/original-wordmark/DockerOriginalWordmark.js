
import React from 'react'
import PropTypes from 'prop-types'
import SVGInline from 'react-svg-inline'
import iconSVG from './DockerOriginalWordmark.svg'
import { normalizeUnit } from '../../utils.js'

/** DockerOriginalWordmark */
function DockerOriginalWordmark({width, height}) {
  return (
     <SVGInline
      classSuffix="-devicon"
      className="DockerOriginalWordmark"
      svg={iconSVG}
      width={normalizeUnit(width)}
      height={normalizeUnit(height)}
    />
  )
}

DockerOriginalWordmark.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default DockerOriginalWordmark
