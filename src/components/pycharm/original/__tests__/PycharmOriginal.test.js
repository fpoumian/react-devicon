import React from 'react'
import renderer from 'react-test-renderer'
import PycharmOriginal from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<PycharmOriginal />).toJSON()
  expect(tree).toMatchSnapshot()
})
