
import React from 'react'
import PropTypes from 'prop-types'
import SVGInline from 'react-svg-inline'
import iconSVG from './UbuntuPlain.svg'
import { normalizeUnit } from '../../utils.js'

/** UbuntuPlain */
function UbuntuPlain({width, height}) {
  return (
     <SVGInline
      classSuffix="-devicon"
      className="UbuntuPlain"
      svg={iconSVG}
      width={normalizeUnit(width)}
      height={normalizeUnit(height)}
    />
  )
}

UbuntuPlain.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default UbuntuPlain
