import React from 'react'
import PropTypes from 'prop-types'
import SVGInline from 'react-svg-inline'
import iconSVG from './MongodbPlain.svg'
import { normalizeUnit } from '../../utils.js'

/** MongodbPlain */
function MongodbPlain({ width, height }) {
  return (
    <SVGInline
      classSuffix="-devicon"
      className="MongodbPlain"
      svg={iconSVG}
      width={normalizeUnit(width)}
      height={normalizeUnit(height)}
    />
  )
}

MongodbPlain.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default MongodbPlain