import React from 'react'
import renderer from 'react-test-renderer'
import BowerLine from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<BowerLine />).toJSON()
  expect(tree).toMatchSnapshot()
})
