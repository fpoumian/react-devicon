module.exports = `import React from 'react'
import PropTypes from 'prop-types'
import SVGInline from 'react-svg-inline'
import normalizeCSSUnit from 'normalize-css-unit'

import iconSVG from './{{ componentName }}.svg'

/** {{ componentName }} */
function {{ componentName }}({width, height}) {
  return (
     <SVGInline
      classSuffix="-devicon"
      className="{{ componentName }}"
      svg={iconSVG}
      width={width ? normalizeCSSUnit(width) : ''}
      height={height ? normalizeCSSUnit(height) : ''}
    />
  )
}

{{ componentName }}.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default {{ componentName }}
`
