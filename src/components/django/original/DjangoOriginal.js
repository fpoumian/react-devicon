
import React from 'react'
import PropTypes from 'prop-types'
import SVGInline from 'react-svg-inline'
import iconSVG from './DjangoOriginal.svg'
import { normalizeUnit } from '../../utils.js'

/** DjangoOriginal */
function DjangoOriginal({width, height}) {
  return (
     <SVGInline
      classSuffix="-devicon"
      className="DjangoOriginal"
      svg={iconSVG}
      width={normalizeUnit(width)}
      height={normalizeUnit(height)}
    />
  )
}

DjangoOriginal.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default DjangoOriginal
