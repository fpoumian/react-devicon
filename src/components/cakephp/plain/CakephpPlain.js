import React from 'react'
import PropTypes from 'prop-types'
import SVGInline from 'react-svg-inline'
import iconSVG from './CakephpPlain.svg'
import { normalizeUnit } from '../../utils.js'

/** CakephpPlain */
function CakephpPlain({ width, height }) {
  return (
    <SVGInline
      classSuffix="-devicon"
      className="CakephpPlain"
      svg={iconSVG}
      width={normalizeUnit(width)}
      height={normalizeUnit(height)}
    />
  )
}

CakephpPlain.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default CakephpPlain
