import React from 'react'
import renderer from 'react-test-renderer'
import KrakenjsOriginal from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<KrakenjsOriginal />).toJSON()
  expect(tree).toMatchSnapshot()
})
