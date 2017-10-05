import React from 'react'
import PropTypes from 'prop-types'
import SVGInline from 'react-svg-inline'
import normalizeCSSUnit from 'normalize-css-unit'

const SVGDeviconInline = ({
  className,
  iconSVG,
  width = null,
  height = null,
}) => {
  return (
    <SVGInline
      component={'div'}
      classSuffix="-devicon"
      className={className}
      svg={iconSVG}
      width={width ? normalizeCSSUnit(width) : ''}
      height={height ? normalizeCSSUnit(height) : ''}
    />
  )
}

SVGDeviconInline.propTypes = {
  className: PropTypes.string,
  iconSVG: PropTypes.string.isRequired,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default SVGDeviconInline
