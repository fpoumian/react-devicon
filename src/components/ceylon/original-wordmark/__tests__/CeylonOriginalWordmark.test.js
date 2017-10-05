import React from 'react'
import renderer from 'react-test-renderer'
import CeylonOriginalWordmark from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<CeylonOriginalWordmark />).toJSON()
  expect(tree).toMatchSnapshot()
})
