import React from 'react'
import renderer from 'react-test-renderer'
import KrakenjsOriginalWordmark from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<KrakenjsOriginalWordmark />).toJSON()
  expect(tree).toMatchSnapshot()
})
