import React from 'react'
import renderer from 'react-test-renderer'
import BowerOriginalWordmark from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<BowerOriginalWordmark />).toJSON()
  expect(tree).toMatchSnapshot()
})
