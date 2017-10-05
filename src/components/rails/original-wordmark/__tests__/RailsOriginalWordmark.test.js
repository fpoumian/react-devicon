import React from 'react'
import renderer from 'react-test-renderer'
import RailsOriginalWordmark from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<RailsOriginalWordmark />).toJSON()
  expect(tree).toMatchSnapshot()
})
