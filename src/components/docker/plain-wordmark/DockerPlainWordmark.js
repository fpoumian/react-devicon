import React from 'react'
import PropTypes from 'prop-types'
import SVGInline from 'react-svg-inline'
import iconSVG from './DockerPlainWordmark.svg'
import { normalizeUnit } from '../../utils.js'

/** DockerPlainWordmark */
function DockerPlainWordmark({ width, height }) {
  return (
    <SVGInline
      classSuffix="-devicon"
      className="DockerPlainWordmark"
      svg={iconSVG}
      width={normalizeUnit(width)}
      height={normalizeUnit(height)}
    />
  )
}

DockerPlainWordmark.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default DockerPlainWordmark
