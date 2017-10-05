import React from 'react'
import renderer from 'react-test-renderer'
import GatlingPlain from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<GatlingPlain />).toJSON()
  expect(tree).toMatchSnapshot()
})
