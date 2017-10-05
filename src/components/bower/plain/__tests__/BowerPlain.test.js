import React from 'react'
import renderer from 'react-test-renderer'
import BowerPlain from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<BowerPlain />).toJSON()
  expect(tree).toMatchSnapshot()
})
