module.exports = `import React from 'react'
import PropTypes from 'prop-types'
import SVGDeviconInline from '../../_base/SVGDeviconInline'

import iconSVG from './{{ componentName }}.svg'

/** {{ componentName }} */
function {{ componentName }}({ width, height, className }) {
  return (
     <SVGDeviconInline
        className={ '{{ componentName }}' + ' ' + className }
        iconSVG={iconSVG}
        width={width}
        height={height}
    />
  )
}

{{ componentName }}.propTypes = {
  className: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default {{ componentName }}
`
