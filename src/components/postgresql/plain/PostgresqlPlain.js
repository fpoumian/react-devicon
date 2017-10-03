
import React from 'react'
import PropTypes from 'prop-types'
import SVGInline from 'react-svg-inline'
import iconSVG from './PostgresqlPlain.svg'
import { normalizeUnit } from '../../utils.js'

/** PostgresqlPlain */
function PostgresqlPlain({width, height}) {
  return (
     <SVGInline
      classSuffix="-devicon"
      className="PostgresqlPlain"
      svg={iconSVG}
      width={normalizeUnit(width)}
      height={normalizeUnit(height)}
    />
  )
}

PostgresqlPlain.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default PostgresqlPlain
