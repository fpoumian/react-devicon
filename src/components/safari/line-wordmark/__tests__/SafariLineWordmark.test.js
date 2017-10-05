import React from 'react'
import renderer from 'react-test-renderer'
import SafariLineWordmark from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<SafariLineWordmark />).toJSON()
  expect(tree).toMatchSnapshot()
})
