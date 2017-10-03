import React from 'react'
import PropTypes from 'prop-types'
import SVGInline from 'react-svg-inline'
import iconSVG from './CakephpOriginal.svg'
import { normalizeUnit } from '../../utils.js'

/** CakephpOriginal */
function CakephpOriginal({ width, height }) {
  return (
    <SVGInline
      classSuffix="-devicon"
      className="CakephpOriginal"
      svg={iconSVG}
      width={normalizeUnit(width)}
      height={normalizeUnit(height)}
    />
  )
}

CakephpOriginal.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default CakephpOriginal
