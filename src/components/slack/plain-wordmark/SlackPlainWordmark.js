import React from 'react'
import PropTypes from 'prop-types'
import SVGInline from 'react-svg-inline'
import iconSVG from './SlackPlainWordmark.svg'
import { normalizeUnit } from '../../utils.js'

/** SlackPlainWordmark */
function SlackPlainWordmark({ width, height }) {
  return (
    <SVGInline
      classSuffix="-devicon"
      className="SlackPlainWordmark"
      svg={iconSVG}
      width={normalizeUnit(width)}
      height={normalizeUnit(height)}
    />
  )
}

SlackPlainWordmark.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default SlackPlainWordmark
