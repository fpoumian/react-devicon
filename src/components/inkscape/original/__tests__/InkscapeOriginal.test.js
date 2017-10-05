import React from 'react'
import renderer from 'react-test-renderer'
import InkscapeOriginal from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<InkscapeOriginal />).toJSON()
  expect(tree).toMatchSnapshot()
})
