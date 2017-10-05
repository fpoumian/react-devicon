import React from 'react'
import renderer from 'react-test-renderer'
import SwiftOriginalWordmark from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<SwiftOriginalWordmark />).toJSON()
  expect(tree).toMatchSnapshot()
})
