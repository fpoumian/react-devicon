import React from 'react'
import renderer from 'react-test-renderer'
import NodewebkitOriginal from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<NodewebkitOriginal />).toJSON()
  expect(tree).toMatchSnapshot()
})
