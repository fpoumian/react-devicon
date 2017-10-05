import React from 'react'
import renderer from 'react-test-renderer'
import GatlingPlainWordmark from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<GatlingPlainWordmark />).toJSON()
  expect(tree).toMatchSnapshot()
})
