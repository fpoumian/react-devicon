import React from 'react'
import renderer from 'react-test-renderer'
import WebpackPlainWordmark from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<WebpackPlainWordmark />).toJSON()
  expect(tree).toMatchSnapshot()
})
