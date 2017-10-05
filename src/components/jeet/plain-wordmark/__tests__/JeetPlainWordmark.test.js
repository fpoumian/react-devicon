import React from 'react'
import renderer from 'react-test-renderer'
import JeetPlainWordmark from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<JeetPlainWordmark />).toJSON()
  expect(tree).toMatchSnapshot()
})
