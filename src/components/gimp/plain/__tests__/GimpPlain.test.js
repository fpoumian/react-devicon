import React from 'react'
import renderer from 'react-test-renderer'
import GimpPlain from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<GimpPlain />).toJSON()
  expect(tree).toMatchSnapshot()
})
