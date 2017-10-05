import React from 'react'
import renderer from 'react-test-renderer'
import VisualstudioPlainWordmark from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<VisualstudioPlainWordmark />).toJSON()
  expect(tree).toMatchSnapshot()
})
