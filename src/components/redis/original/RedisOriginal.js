
import React from 'react'
import PropTypes from 'prop-types'
import SVGInline from 'react-svg-inline'
import iconSVG from './RedisOriginal.svg'
import { normalizeUnit } from '../../utils.js'

/** RedisOriginal */
function RedisOriginal({width, height}) {
  return (
     <SVGInline
      classSuffix="-devicon"
      className="RedisOriginal"
      svg={iconSVG}
      width={normalizeUnit(width)}
      height={normalizeUnit(height)}
    />
  )
}

RedisOriginal.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default RedisOriginal
