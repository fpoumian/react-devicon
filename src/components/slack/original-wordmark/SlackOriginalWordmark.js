
import React from 'react'
import PropTypes from 'prop-types'
import SVGInline from 'react-svg-inline'
import iconSVG from './SlackOriginalWordmark.svg'
import { normalizeUnit } from '../../utils.js'

/** SlackOriginalWordmark */
function SlackOriginalWordmark({width, height}) {
  return (
     <SVGInline
      classSuffix="-devicon"
      className="SlackOriginalWordmark"
      svg={iconSVG}
      width={normalizeUnit(width)}
      height={normalizeUnit(height)}
    />
  )
}

SlackOriginalWordmark.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default SlackOriginalWordmark
