import React from 'react'
import renderer from 'react-test-renderer'
import JeetPlain from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<JeetPlain />).toJSON()
  expect(tree).toMatchSnapshot()
})
