import React from 'react'
import renderer from 'react-test-renderer'
import JetbrainsOriginal from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<JetbrainsOriginal />).toJSON()
  expect(tree).toMatchSnapshot()
})
