import React from 'react'
import renderer from 'react-test-renderer'
import CeylonPlain from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<CeylonPlain />).toJSON()
  expect(tree).toMatchSnapshot()
})
