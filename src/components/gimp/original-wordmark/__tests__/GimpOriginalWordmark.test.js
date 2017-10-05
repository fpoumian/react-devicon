import React from 'react'
import renderer from 'react-test-renderer'
import GimpOriginalWordmark from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<GimpOriginalWordmark />).toJSON()
  expect(tree).toMatchSnapshot()
})
