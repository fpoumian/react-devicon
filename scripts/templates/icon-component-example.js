module.exports = `
import React from 'react'
import {{ defaultImportIdentifier }} from 'react-devicon/{{iconName}}/{{iconVersion}}'

export default function {{defaultFunctionIdentifier}} () {
  return <{{defaultImportIdentifier}} width={'{{width}}'} height={'{{height}}'} />
}
 
`
