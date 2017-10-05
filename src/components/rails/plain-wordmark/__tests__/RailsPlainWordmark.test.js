import React from 'react'
import renderer from 'react-test-renderer'
import RailsPlainWordmark from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<RailsPlainWordmark />).toJSON()
  expect(tree).toMatchSnapshot()
})
