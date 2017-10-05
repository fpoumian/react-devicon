import React from 'react'
import renderer from 'react-test-renderer'
import SafariPlainWordmark from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<SafariPlainWordmark />).toJSON()
  expect(tree).toMatchSnapshot()
})
