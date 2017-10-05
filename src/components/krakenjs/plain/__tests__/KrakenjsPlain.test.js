import React from 'react'
import renderer from 'react-test-renderer'
import KrakenjsPlain from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<KrakenjsPlain />).toJSON()
  expect(tree).toMatchSnapshot()
})
