import React from 'react'
import renderer from 'react-test-renderer'
import Windows8Original from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<Windows8Original />).toJSON()
  expect(tree).toMatchSnapshot()
})
