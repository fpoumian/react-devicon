import React from 'react'
import renderer from 'react-test-renderer'
import PhpPlain from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<PhpPlain />).toJSON()
  expect(tree).toMatchSnapshot()
})
