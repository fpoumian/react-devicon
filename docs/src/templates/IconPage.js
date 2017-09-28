import React from "react"
import PropTypes from "prop-types"
import * as iconComponents from "react-devicon/index.js"
import pascalCase from "pascal-case"
import Devicon from "../components/Devicon/Devicon.js"
import List from "grommet/components/List"
import ListItem from "grommet/components/ListItem"

class IconPage extends React.Component {
  render() {
    const { name, versions } = this.props.pathContext

    const componentsNames = versions.map(
      version => `${pascalCase(name)}${pascalCase(version)}`
    )

    const devicons = versions.map(version => ({
      componentName: `${pascalCase(name)}${pascalCase(version)}`,
      name,
      version
    }))

    return (
      <div>
        <h1>
          {this.props.pathContext.name}
        </h1>
        <List>
          {devicons.map(devicon => {
            const IconComponent = iconComponents[devicon.componentName] || null
            return IconComponent
              ? <ListItem>
                  <Devicon
                    componentName={devicon.componentName}
                    iconName={devicon.name}
                    iconVersion={devicon.version}
                    IconComponent={IconComponent}
                  />
                </ListItem>
              : ""
          })}
        </List>
      </div>
    )
  }
}

IconPage.propTypes = {
  pathContext: PropTypes.object
}

export default IconPage
