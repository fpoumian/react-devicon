
import React from 'react'
import PropTypes from 'prop-types'
import SVGInline from 'react-svg-inline'
import iconSVG from './TrelloPlain.svg'
import { normalizeUnit } from '../../utils.js'

/** TrelloPlain */
function TrelloPlain({width, height}) {
  return (
     <SVGInline
      classSuffix="-devicon"
      className="TrelloPlain"
      svg={iconSVG}
      width={normalizeUnit(width)}
      height={normalizeUnit(height)}
    />
  )
}

TrelloPlain.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default TrelloPlain
