import React from 'react'
import renderer from 'react-test-renderer'
import CplusplusOriginal from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<CplusplusOriginal />).toJSON()
  expect(tree).toMatchSnapshot()
})
