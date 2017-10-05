import React from 'react'
import renderer from 'react-test-renderer'
import JqueryOriginalWordmark from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<JqueryOriginalWordmark />).toJSON()
  expect(tree).toMatchSnapshot()
})
