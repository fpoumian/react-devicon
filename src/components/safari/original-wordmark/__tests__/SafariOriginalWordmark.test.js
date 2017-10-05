import React from 'react'
import renderer from 'react-test-renderer'
import SafariOriginalWordmark from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<SafariOriginalWordmark />).toJSON()
  expect(tree).toMatchSnapshot()
})
