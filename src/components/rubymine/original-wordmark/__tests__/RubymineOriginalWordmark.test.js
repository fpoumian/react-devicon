import React from 'react'
import renderer from 'react-test-renderer'
import RubymineOriginalWordmark from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<RubymineOriginalWordmark />).toJSON()
  expect(tree).toMatchSnapshot()
})
