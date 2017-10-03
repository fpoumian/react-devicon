
import React from 'react'
import PropTypes from 'prop-types'
import SVGInline from 'react-svg-inline'
import iconSVG from './GitlabOriginal.svg'
import { normalizeUnit } from '../../utils.js'

/** GitlabOriginal */
function GitlabOriginal({width, height}) {
  return (
     <SVGInline
      classSuffix="-devicon"
      className="GitlabOriginal"
      svg={iconSVG}
      width={normalizeUnit(width)}
      height={normalizeUnit(height)}
    />
  )
}

GitlabOriginal.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default GitlabOriginal
