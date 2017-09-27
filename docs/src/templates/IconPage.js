import React from "react"
import * as iconComponents from "react-devicon/index.js"
import pascalCase from "pascal-case"

class IconPage extends React.Component {
  render() {
    const { name, versions } = this.props.pathContext

    const componentsNames = versions.map(
      version => `${pascalCase(name)}${pascalCase(version)}`
    )

    return (
      <div>
        <h1>
          {this.props.pathContext.name}
        </h1>
        {componentsNames.map(componentName => {
          const IconComponent = iconComponents[componentName] || null
          return IconComponent ? <IconComponent width={200} height={200} /> : ""
        })}
      </div>
    )
  }
}

export default IconPage
