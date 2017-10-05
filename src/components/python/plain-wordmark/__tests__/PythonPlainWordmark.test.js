import React from 'react'
import renderer from 'react-test-renderer'
import PythonPlainWordmark from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<PythonPlainWordmark />).toJSON()
  expect(tree).toMatchSnapshot()
})
