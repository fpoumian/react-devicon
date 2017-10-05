import React from 'react'
import renderer from 'react-test-renderer'
import KrakenjsPlainWordmark from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<KrakenjsPlainWordmark />).toJSON()
  expect(tree).toMatchSnapshot()
})
