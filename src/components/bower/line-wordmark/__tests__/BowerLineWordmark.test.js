import React from 'react'
import renderer from 'react-test-renderer'
import BowerLineWordmark from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<BowerLineWordmark />).toJSON()
  expect(tree).toMatchSnapshot()
})
