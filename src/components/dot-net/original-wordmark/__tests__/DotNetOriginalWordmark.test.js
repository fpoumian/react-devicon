import React from 'react'
import renderer from 'react-test-renderer'
import DotNetOriginalWordmark from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<DotNetOriginalWordmark />).toJSON()
  expect(tree).toMatchSnapshot()
})
