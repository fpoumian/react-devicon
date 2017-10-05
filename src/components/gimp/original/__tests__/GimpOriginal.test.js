import React from 'react'
import renderer from 'react-test-renderer'
import GimpOriginal from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<GimpOriginal />).toJSON()
  expect(tree).toMatchSnapshot()
})
