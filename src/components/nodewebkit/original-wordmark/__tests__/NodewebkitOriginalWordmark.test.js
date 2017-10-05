import React from 'react'
import renderer from 'react-test-renderer'
import NodewebkitOriginalWordmark from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<NodewebkitOriginalWordmark />).toJSON()
  expect(tree).toMatchSnapshot()
})
