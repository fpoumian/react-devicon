import React from 'react'
import renderer from 'react-test-renderer'
import BackbonejsPlainWordmark from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<BackbonejsPlainWordmark />).toJSON()
  expect(tree).toMatchSnapshot()
})
