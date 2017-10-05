import React from 'react'
import renderer from 'react-test-renderer'
import InkscapeOriginalWordmark from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<InkscapeOriginalWordmark />).toJSON()
  expect(tree).toMatchSnapshot()
})
