import React from 'react'
import renderer from 'react-test-renderer'
import VisualstudioPlain from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<VisualstudioPlain />).toJSON()
  expect(tree).toMatchSnapshot()
})
