import React from 'react'
import renderer from 'react-test-renderer'
import JavaPlain from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<JavaPlain />).toJSON()
  expect(tree).toMatchSnapshot()
})
