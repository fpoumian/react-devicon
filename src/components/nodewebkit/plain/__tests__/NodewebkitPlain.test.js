import React from 'react'
import renderer from 'react-test-renderer'
import NodewebkitPlain from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<NodewebkitPlain />).toJSON()
  expect(tree).toMatchSnapshot()
})
