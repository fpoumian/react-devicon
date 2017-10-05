import React from 'react'
import renderer from 'react-test-renderer'
import GimpPlainWordmark from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<GimpPlainWordmark />).toJSON()
  expect(tree).toMatchSnapshot()
})
