import React from "react"
import PropTypes from "prop-types"
import pascalCase from "pascal-case"
import CodeSnippet from "../CodeSnippet/CodeSnippet"

const IconImportCode = ({ iconName, iconVersion }) => {
  return (
    <div>
      <CodeSnippet className={"javascript"}>
        {`import Icon${pascalCase(
          iconName
        )} from 'react-devicon/${iconName}/${iconVersion}'`}
      </CodeSnippet>
    </div>
  )
}

IconImportCode.propTypes = {}
IconImportCode.defaultProps = {}

export default IconImportCode
