import React from 'react'
import renderer from 'react-test-renderer'
import WebpackPlain from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<WebpackPlain />).toJSON()
  expect(tree).toMatchSnapshot()
})
