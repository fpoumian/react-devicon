import React from 'react'
import renderer from 'react-test-renderer'
import RubyPlain from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<RubyPlain />).toJSON()
  expect(tree).toMatchSnapshot()
})
