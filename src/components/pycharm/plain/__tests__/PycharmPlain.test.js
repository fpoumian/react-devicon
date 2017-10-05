import React from 'react'
import renderer from 'react-test-renderer'
import PycharmPlain from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<PycharmPlain />).toJSON()
  expect(tree).toMatchSnapshot()
})
