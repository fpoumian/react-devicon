import React from 'react'
import renderer from 'react-test-renderer'
import PhpstormPlain from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<PhpstormPlain />).toJSON()
  expect(tree).toMatchSnapshot()
})
