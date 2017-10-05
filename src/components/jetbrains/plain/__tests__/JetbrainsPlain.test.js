import React from 'react'
import renderer from 'react-test-renderer'
import JetbrainsPlain from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<JetbrainsPlain />).toJSON()
  expect(tree).toMatchSnapshot()
})
