import React from 'react'
import renderer from 'react-test-renderer'
import YiiPlain from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<YiiPlain />).toJSON()
  expect(tree).toMatchSnapshot()
})
