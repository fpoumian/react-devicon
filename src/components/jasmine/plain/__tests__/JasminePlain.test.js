import React from 'react'
import renderer from 'react-test-renderer'
import JasminePlain from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<JasminePlain />).toJSON()
  expect(tree).toMatchSnapshot()
})
