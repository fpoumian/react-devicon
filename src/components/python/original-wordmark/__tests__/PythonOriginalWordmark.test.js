import React from 'react'
import renderer from 'react-test-renderer'
import PythonOriginalWordmark from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<PythonOriginalWordmark />).toJSON()
  expect(tree).toMatchSnapshot()
})
