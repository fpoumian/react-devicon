
import React from 'react'
import PropTypes from 'prop-types'
import SVGInline from 'react-svg-inline'
import iconSVG from './MysqlPlainWordmark.svg'
import { normalizeUnit } from '../../utils.js'

/** MysqlPlainWordmark */
function MysqlPlainWordmark({width, height}) {
  return (
     <SVGInline
      classSuffix="-devicon"
      className="MysqlPlainWordmark"
      svg={iconSVG}
      width={normalizeUnit(width)}
      height={normalizeUnit(height)}
    />
  )
}

MysqlPlainWordmark.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default MysqlPlainWordmark
