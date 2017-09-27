
import React from 'react'
import PropTypes from 'prop-types'
import SVGInline from 'react-svg-inline'
import iconSVG from './MoodlePlainWordmark.svg'
import { normalizeUnit } from '../../utils.js'

/** MoodlePlainWordmark */
function MoodlePlainWordmark({width, height}) {
  return (
     <SVGInline
      classSuffix="-devicon"
      className="MoodlePlainWordmark"
      svg={iconSVG}
      width={normalizeUnit(width)}
      height={normalizeUnit(height)}
    />
  )
}

MoodlePlainWordmark.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default MoodlePlainWordmark
