import React from 'react'
import renderer from 'react-test-renderer'
import GooglePlain from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<GooglePlain />).toJSON()
  expect(tree).toMatchSnapshot()
})
