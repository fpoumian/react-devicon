import React from 'react'
import renderer from 'react-test-renderer'
import LaravelPlainWordmark from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<LaravelPlainWordmark />).toJSON()
  expect(tree).toMatchSnapshot()
})
