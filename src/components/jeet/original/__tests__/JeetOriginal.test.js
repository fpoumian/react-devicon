import React from 'react'
import renderer from 'react-test-renderer'
import JeetOriginal from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<JeetOriginal />).toJSON()
  expect(tree).toMatchSnapshot()
})
