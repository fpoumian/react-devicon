import React from 'react'
import renderer from 'react-test-renderer'
import SwiftPlain from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<SwiftPlain />).toJSON()
  expect(tree).toMatchSnapshot()
})
