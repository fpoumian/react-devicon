import React from 'react'
import renderer from 'react-test-renderer'
import WordpressPlainWordmark from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<WordpressPlainWordmark />).toJSON()
  expect(tree).toMatchSnapshot()
})
