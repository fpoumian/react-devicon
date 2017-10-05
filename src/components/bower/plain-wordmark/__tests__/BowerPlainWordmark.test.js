import React from 'react'
import renderer from 'react-test-renderer'
import BowerPlainWordmark from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<BowerPlainWordmark />).toJSON()
  expect(tree).toMatchSnapshot()
})
