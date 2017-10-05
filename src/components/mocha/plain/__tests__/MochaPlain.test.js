import React from 'react'
import renderer from 'react-test-renderer'
import MochaPlain from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<MochaPlain />).toJSON()
  expect(tree).toMatchSnapshot()
})
