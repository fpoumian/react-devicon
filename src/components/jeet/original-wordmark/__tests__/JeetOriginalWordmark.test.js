import React from 'react'
import renderer from 'react-test-renderer'
import JeetOriginalWordmark from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<JeetOriginalWordmark />).toJSON()
  expect(tree).toMatchSnapshot()
})
