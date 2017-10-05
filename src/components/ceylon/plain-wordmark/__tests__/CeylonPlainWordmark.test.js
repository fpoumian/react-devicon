import React from 'react'
import renderer from 'react-test-renderer'
import CeylonPlainWordmark from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<CeylonPlainWordmark />).toJSON()
  expect(tree).toMatchSnapshot()
})
