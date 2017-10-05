import React from 'react'
import renderer from 'react-test-renderer'
import NodewebkitLineWordmark from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<NodewebkitLineWordmark />).toJSON()
  expect(tree).toMatchSnapshot()
})
