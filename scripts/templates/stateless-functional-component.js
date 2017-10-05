module.exports = `import React from 'react'
import PropTypes from 'prop-types'
import SVGInline from 'react-svg-inline'
import iconSVG from './{{ componentName }}.svg'
import { normalizeUnit } from '../../utils.js'

/** {{ componentName }} */
function {{ componentName }}({width, height}) {
  return (
     <SVGInline
      classSuffix="-devicon"
      className="{{ componentName }}"
      svg={iconSVG}
      width={normalizeUnit(width)}
      height={normalizeUnit(height)}
    />
  )
}

{{ componentName }}.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default {{ componentName }}
`
