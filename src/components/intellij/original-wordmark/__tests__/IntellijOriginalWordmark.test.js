import React from 'react'
import renderer from 'react-test-renderer'
import IntellijOriginalWordmark from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<IntellijOriginalWordmark />).toJSON()
  expect(tree).toMatchSnapshot()
})
