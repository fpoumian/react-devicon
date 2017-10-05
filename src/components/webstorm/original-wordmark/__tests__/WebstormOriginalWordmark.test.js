import React from 'react'
import renderer from 'react-test-renderer'
import WebstormOriginalWordmark from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<WebstormOriginalWordmark />).toJSON()
  expect(tree).toMatchSnapshot()
})
