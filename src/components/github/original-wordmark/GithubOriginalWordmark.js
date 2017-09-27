
import React from 'react'
import PropTypes from 'prop-types'
import SVGInline from 'react-svg-inline'
import iconSVG from './GithubOriginalWordmark.svg'
import { normalizeUnit } from '../../utils.js'

/** GithubOriginalWordmark */
function GithubOriginalWordmark({width, height}) {
  return (
     <SVGInline
      classSuffix="-devicon"
      className="GithubOriginalWordmark"
      svg={iconSVG}
      width={normalizeUnit(width)}
      height={normalizeUnit(height)}
    />
  )
}

GithubOriginalWordmark.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default GithubOriginalWordmark
