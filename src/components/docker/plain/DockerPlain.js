import React from 'react'
import PropTypes from 'prop-types'
import SVGInline from 'react-svg-inline'
import iconSVG from './DockerPlain.svg'
import { normalizeUnit } from '../../utils.js'

/** DockerPlain */
function DockerPlain({ width, height }) {
  return (
    <SVGInline
      classSuffix="-devicon"
      className="DockerPlain"
      svg={iconSVG}
      width={normalizeUnit(width)}
      height={normalizeUnit(height)}
    />
  )
}

DockerPlain.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default DockerPlain
