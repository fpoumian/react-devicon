import React from 'react'
import renderer from 'react-test-renderer'
import NodewebkitLine from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<NodewebkitLine />).toJSON()
  expect(tree).toMatchSnapshot()
})
