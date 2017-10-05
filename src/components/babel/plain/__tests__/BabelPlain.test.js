import React from 'react'
import renderer from 'react-test-renderer'
import BabelPlain from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<BabelPlain />).toJSON()
  expect(tree).toMatchSnapshot()
})
