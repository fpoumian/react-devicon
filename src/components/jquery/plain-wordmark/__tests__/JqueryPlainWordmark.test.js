import React from 'react'
import renderer from 'react-test-renderer'
import JqueryPlainWordmark from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<JqueryPlainWordmark />).toJSON()
  expect(tree).toMatchSnapshot()
})
