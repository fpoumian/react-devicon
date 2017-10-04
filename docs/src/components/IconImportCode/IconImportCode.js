import React from 'react'
import PropTypes from 'prop-types'
import pascalCase from 'pascal-case'
import Box from 'grommet/components/Box'

import CodeSnippet from '../CodeSnippet/CodeSnippet'
import CopyBtnContainer from '../../containers/CopyButtonContainer/CopyButtonContainer'

const IconImportCode = ({ iconName, iconVersion }) => {
  const code = `import Icon${pascalCase(
    iconName
  )} from 'react-devicon/${iconName}/${iconVersion}'`
  return (
    <div>
      <CodeSnippet className={'javascript'}>{code}</CodeSnippet>
      <Box justify={'center'} direction={'center'}>
        <CopyBtnContainer toCopy={code} />
      </Box>
    </div>
  )
}

IconImportCode.propTypes = {
  iconName: PropTypes.string,
  iconVersion: PropTypes.string,
}

export default IconImportCode
