
import React from 'react'
import PropTypes from 'prop-types'
import SVGInline from 'react-svg-inline'
import iconSVG from './PostgresqlOriginal.svg'
import { normalizeUnit } from '../../utils.js'

/** PostgresqlOriginal */
function PostgresqlOriginal({width, height}) {
  return (
     <SVGInline
      classSuffix="-devicon"
      className="PostgresqlOriginal"
      svg={iconSVG}
      width={normalizeUnit(width)}
      height={normalizeUnit(height)}
    />
  )
}

PostgresqlOriginal.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default PostgresqlOriginal
