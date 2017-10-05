import React from 'react'
import renderer from 'react-test-renderer'
import CeylonOriginal from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<CeylonOriginal />).toJSON()
  expect(tree).toMatchSnapshot()
})
