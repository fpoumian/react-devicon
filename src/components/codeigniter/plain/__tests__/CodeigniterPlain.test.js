import React from 'react'
import renderer from 'react-test-renderer'
import CodeigniterPlain from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<CodeigniterPlain />).toJSON()
  expect(tree).toMatchSnapshot()
})
