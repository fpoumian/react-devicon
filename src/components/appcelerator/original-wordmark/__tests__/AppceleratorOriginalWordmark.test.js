import React from 'react'
import renderer from 'react-test-renderer'
import AppceleratorOriginalWordmark from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<AppceleratorOriginalWordmark />).toJSON()
  expect(tree).toMatchSnapshot()
})
