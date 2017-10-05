import React from 'react'
import renderer from 'react-test-renderer'
import SwiftOriginal from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<SwiftOriginal />).toJSON()
  expect(tree).toMatchSnapshot()
})
