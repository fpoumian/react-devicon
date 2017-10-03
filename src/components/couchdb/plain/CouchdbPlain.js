import React from 'react'
import PropTypes from 'prop-types'
import SVGInline from 'react-svg-inline'
import iconSVG from './CouchdbPlain.svg'
import { normalizeUnit } from '../../utils.js'

/** CouchdbPlain */
function CouchdbPlain({ width, height }) {
  return (
    <SVGInline
      classSuffix="-devicon"
      className="CouchdbPlain"
      svg={iconSVG}
      width={normalizeUnit(width)}
      height={normalizeUnit(height)}
    />
  )
}

CouchdbPlain.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default CouchdbPlain
