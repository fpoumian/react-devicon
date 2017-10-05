import React from 'react'
import renderer from 'react-test-renderer'
import LaravelPlain from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<LaravelPlain />).toJSON()
  expect(tree).toMatchSnapshot()
})
