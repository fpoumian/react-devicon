module.exports = `import React from 'react'
import renderer from 'react-test-renderer'
import {{ componentName }} from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(
    <{{ componentName }} />
  ).toJSON()
  expect(tree).toMatchSnapshot()
});
`
