import React from 'react'
import PropTypes from 'prop-types'
import SVGInline from 'react-svg-inline'
import iconSVG from './DjangoLine.svg'
import { normalizeUnit } from '../../utils.js'

/** DjangoLine */
function DjangoLine({ width, height }) {
  return (
    <SVGInline
      classSuffix="-devicon"
      className="DjangoLine"
      svg={iconSVG}
      width={normalizeUnit(width)}
      height={normalizeUnit(height)}
    />
  )
}

DjangoLine.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default DjangoLine
