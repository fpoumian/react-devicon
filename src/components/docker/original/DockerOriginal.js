
import React from 'react'
import PropTypes from 'prop-types'
import SVGInline from 'react-svg-inline'
import iconSVG from './DockerOriginal.svg'
import { normalizeUnit } from '../../utils.js'

/** DockerOriginal */
function DockerOriginal({width, height}) {
  return (
     <SVGInline
      classSuffix="-devicon"
      className="DockerOriginal"
      svg={iconSVG}
      width={normalizeUnit(width)}
      height={normalizeUnit(height)}
    />
  )
}

DockerOriginal.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default DockerOriginal
