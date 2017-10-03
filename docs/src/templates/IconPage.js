import React from 'react'
import PropTypes from 'prop-types'
import * as iconComponents from 'react-devicon/index.js'
import pascalCase from 'pascal-case'
import Devicon from '../components/Devicon/Devicon.js'
import Helmet from 'react-helmet'
import List from 'grommet/components/List'
import ListItem from 'grommet/components/ListItem'
import Heading from 'grommet/components/Heading'

class IconPage extends React.Component {
  render() {
    const { name, versions } = this.props.pathContext

    const devicons = versions.map(version => ({
      componentName: `${pascalCase(name)}${pascalCase(version)}`,
      name,
      version,
    }))

    return (
      <div>
        <Helmet>
          <title>{`React Devicon | ${name}`}</title>
        </Helmet>
        <Heading align={'center'}>{this.props.pathContext.name}</Heading>
        <List>
          {devicons.map(devicon => {
            const IconComponent = iconComponents[devicon.componentName] || null
            return IconComponent ? (
              <ListItem
                justify={'center'}
                pad={{
                  vertical: 'medium',
                }}
                key={devicon.componentName}
              >
                <Devicon
                  componentName={devicon.componentName}
                  iconName={devicon.name}
                  iconVersion={devicon.version}
                  IconComponent={IconComponent}
                />
              </ListItem>
            ) : (
              ''
            )
          })}
        </List>
      </div>
    )
  }
}

IconPage.propTypes = {
  pathContext: PropTypes.object,
}

export default IconPage
