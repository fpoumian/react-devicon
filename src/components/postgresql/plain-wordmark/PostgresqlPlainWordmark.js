import React from 'react'
import PropTypes from 'prop-types'
import SVGInline from 'react-svg-inline'
import normalizeCSSUnit from 'normalize-css-unit'

import iconSVG from './PostgresqlPlainWordmark.svg'

/** PostgresqlPlainWordmark */
function PostgresqlPlainWordmark({ width, height }) {
  return (
    <SVGInline
      classSuffix="-devicon"
      className="PostgresqlPlainWordmark"
      svg={iconSVG}
      width={width ? normalizeCSSUnit(width) : ''}
      height={height ? normalizeCSSUnit(height) : ''}
    />
  )
}

PostgresqlPlainWordmark.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default PostgresqlPlainWordmark
