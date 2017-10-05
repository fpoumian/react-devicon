import React from 'react'
import renderer from 'react-test-renderer'
import PythonPlain from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<PythonPlain />).toJSON()
  expect(tree).toMatchSnapshot()
})
