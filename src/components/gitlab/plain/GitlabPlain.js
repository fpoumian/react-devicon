
import React from 'react'
import PropTypes from 'prop-types'
import SVGInline from 'react-svg-inline'
import iconSVG from './GitlabPlain.svg'
import { normalizeUnit } from '../../utils.js'

/** GitlabPlain */
function GitlabPlain({width, height}) {
  return (
     <SVGInline
      classSuffix="-devicon"
      className="GitlabPlain"
      svg={iconSVG}
      width={normalizeUnit(width)}
      height={normalizeUnit(height)}
    />
  )
}

GitlabPlain.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default GitlabPlain
