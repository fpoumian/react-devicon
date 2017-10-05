import React from 'react'
import renderer from 'react-test-renderer'
import SwiftPlainWordmark from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<SwiftPlainWordmark />).toJSON()
  expect(tree).toMatchSnapshot()
})
