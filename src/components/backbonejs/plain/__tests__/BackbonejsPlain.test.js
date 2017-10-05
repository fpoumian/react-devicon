import React from 'react'
import renderer from 'react-test-renderer'
import BackbonejsPlain from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<BackbonejsPlain />).toJSON()
  expect(tree).toMatchSnapshot()
})
