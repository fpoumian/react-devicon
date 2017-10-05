import React from 'react'
import renderer from 'react-test-renderer'
import JasminePlainWordmark from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<JasminePlainWordmark />).toJSON()
  expect(tree).toMatchSnapshot()
})
