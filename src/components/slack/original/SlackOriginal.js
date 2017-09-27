
import React from 'react'
import PropTypes from 'prop-types'
import SVGInline from 'react-svg-inline'
import iconSVG from './SlackOriginal.svg'
import { normalizeUnit } from '../../utils.js'

/** SlackOriginal */
function SlackOriginal({width, height}) {
  return (
     <SVGInline
      classSuffix="-devicon"
      className="SlackOriginal"
      svg={iconSVG}
      width={normalizeUnit(width)}
      height={normalizeUnit(height)}
    />
  )
}

SlackOriginal.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default SlackOriginal
