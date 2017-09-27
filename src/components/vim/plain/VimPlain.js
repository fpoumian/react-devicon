import React from "react"
import PropTypes from "prop-types"
import SVGInline from "react-svg-inline"
import iconSVG from "./VimPlain.svg"
import { normalizeUnit } from "../../utils.js"

/** VimPlain */
function VimPlain({ width, height }) {
  return (
    <SVGInline
      classSuffix="-devicon"
      className="VimPlain"
      svg={iconSVG}
      width={normalizeUnit(width)}
      height={normalizeUnit(height)}
    />
  )
}

VimPlain.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default VimPlain
