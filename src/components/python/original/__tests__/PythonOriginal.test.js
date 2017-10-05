import React from 'react'
import renderer from 'react-test-renderer'
import PythonOriginal from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<PythonOriginal />).toJSON()
  expect(tree).toMatchSnapshot()
})
