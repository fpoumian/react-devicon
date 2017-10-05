import React from 'react'
import renderer from 'react-test-renderer'
import CsharpPlain from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<CsharpPlain />).toJSON()
  expect(tree).toMatchSnapshot()
})