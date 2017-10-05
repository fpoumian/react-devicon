import React from 'react'
import renderer from 'react-test-renderer'
import IntellijPlain from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<IntellijPlain />).toJSON()
  expect(tree).toMatchSnapshot()
})
