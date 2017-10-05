import React from 'react'
import renderer from 'react-test-renderer'
import Windows8OriginalWordmark from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<Windows8OriginalWordmark />).toJSON()
  expect(tree).toMatchSnapshot()
})
