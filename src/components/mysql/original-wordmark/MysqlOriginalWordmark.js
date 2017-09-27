
import React from 'react'
import PropTypes from 'prop-types'
import SVGInline from 'react-svg-inline'
import iconSVG from './MysqlOriginalWordmark.svg'
import { normalizeUnit } from '../../utils.js'

/** MysqlOriginalWordmark */
function MysqlOriginalWordmark({width, height}) {
  return (
     <SVGInline
      classSuffix="-devicon"
      className="MysqlOriginalWordmark"
      svg={iconSVG}
      width={normalizeUnit(width)}
      height={normalizeUnit(height)}
    />
  )
}

MysqlOriginalWordmark.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default MysqlOriginalWordmark
