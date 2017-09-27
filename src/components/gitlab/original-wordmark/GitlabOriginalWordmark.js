
import React from 'react'
import PropTypes from 'prop-types'
import SVGInline from 'react-svg-inline'
import iconSVG from './GitlabOriginalWordmark.svg'
import { normalizeUnit } from '../../utils.js'

/** GitlabOriginalWordmark */
function GitlabOriginalWordmark({width, height}) {
  return (
     <SVGInline
      classSuffix="-devicon"
      className="GitlabOriginalWordmark"
      svg={iconSVG}
      width={normalizeUnit(width)}
      height={normalizeUnit(height)}
    />
  )
}

GitlabOriginalWordmark.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default GitlabOriginalWordmark
