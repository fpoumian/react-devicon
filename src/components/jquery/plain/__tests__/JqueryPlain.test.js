import React from 'react'
import renderer from 'react-test-renderer'
import JqueryPlain from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<JqueryPlain />).toJSON()
  expect(tree).toMatchSnapshot()
})
