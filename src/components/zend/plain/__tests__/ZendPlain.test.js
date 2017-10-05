import React from 'react'
import renderer from 'react-test-renderer'
import ZendPlain from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<ZendPlain />).toJSON()
  expect(tree).toMatchSnapshot()
})
