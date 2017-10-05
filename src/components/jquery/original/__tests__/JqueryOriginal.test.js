import React from 'react'
import renderer from 'react-test-renderer'
import JqueryOriginal from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<JqueryOriginal />).toJSON()
  expect(tree).toMatchSnapshot()
})
