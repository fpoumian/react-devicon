import React from "react"
import PropTypes from "prop-types"
import Box from "grommet/components/Box"
import IconImportCode from "../IconImportCode/IconImportCode"

const Devicon = ({ IconComponent, componentName, iconName, iconVersion }) => {
  return (
    <Box>
      <Box
        margin={{
          vertical: "medium"
        }}
      >
        <IconComponent key={componentName} width={200} height={200} />
      </Box>
      <Box>
        <IconImportCode iconName={iconName} iconVersion={iconVersion} />
      </Box>
    </Box>
  )
}

Devicon.propTypes = {}

export default Devicon
