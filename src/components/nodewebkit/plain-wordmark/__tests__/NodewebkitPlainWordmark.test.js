import React from 'react'
import renderer from 'react-test-renderer'
import NodewebkitPlainWordmark from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<NodewebkitPlainWordmark />).toJSON()
  expect(tree).toMatchSnapshot()
})
