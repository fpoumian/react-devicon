import React from 'react'
import renderer from 'react-test-renderer'
import D3jsPlain from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<D3jsPlain />).toJSON()
  expect(tree).toMatchSnapshot()
})
