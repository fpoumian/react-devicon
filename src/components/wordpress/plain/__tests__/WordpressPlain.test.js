import React from 'react'
import renderer from 'react-test-renderer'
import WordpressPlain from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<WordpressPlain />).toJSON()
  expect(tree).toMatchSnapshot()
})
