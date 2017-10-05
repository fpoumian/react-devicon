import React from 'react'
import renderer from 'react-test-renderer'
import RailsPlain from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<RailsPlain />).toJSON()
  expect(tree).toMatchSnapshot()
})
