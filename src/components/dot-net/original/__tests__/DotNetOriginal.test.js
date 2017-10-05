import React from 'react'
import renderer from 'react-test-renderer'
import DotNetOriginal from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<DotNetOriginal />).toJSON()
  expect(tree).toMatchSnapshot()
})
