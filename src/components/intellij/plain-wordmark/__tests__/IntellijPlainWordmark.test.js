import React from 'react'
import renderer from 'react-test-renderer'
import IntellijPlainWordmark from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<IntellijPlainWordmark />).toJSON()
  expect(tree).toMatchSnapshot()
})
