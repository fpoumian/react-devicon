import React from 'react'
import renderer from 'react-test-renderer'
import InkscapePlain from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<InkscapePlain />).toJSON()
  expect(tree).toMatchSnapshot()
})
