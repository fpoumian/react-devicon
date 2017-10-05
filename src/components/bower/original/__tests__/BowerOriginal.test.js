import React from 'react'
import renderer from 'react-test-renderer'
import BowerOriginal from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<BowerOriginal />).toJSON()
  expect(tree).toMatchSnapshot()
})
