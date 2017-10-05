import React from 'react'
import renderer from 'react-test-renderer'
import LessPlainWordmark from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<LessPlainWordmark />).toJSON()
  expect(tree).toMatchSnapshot()
})
