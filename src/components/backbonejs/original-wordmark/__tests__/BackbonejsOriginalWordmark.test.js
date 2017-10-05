import React from 'react'
import renderer from 'react-test-renderer'
import BackbonejsOriginalWordmark from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<BackbonejsOriginalWordmark />).toJSON()
  expect(tree).toMatchSnapshot()
})
