import React from 'react'
import renderer from 'react-test-renderer'
import DotNetPlainWordmark from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<DotNetPlainWordmark />).toJSON()
  expect(tree).toMatchSnapshot()
})
