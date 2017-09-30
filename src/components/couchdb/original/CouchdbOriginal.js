import React from 'react'
import PropTypes from 'prop-types'
import SVGInline from 'react-svg-inline'
import iconSVG from './CouchdbOriginal.svg'
import { normalizeUnit } from '../../utils.js'

/** CouchdbOriginal */
function CouchdbOriginal({ width, height }) {
  return (
    <SVGInline
      classSuffix="-devicon"
      className="CouchdbOriginal"
      svg={iconSVG}
      width={normalizeUnit(width)}
      height={normalizeUnit(height)}
    />
  )
}

CouchdbOriginal.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default CouchdbOriginal
