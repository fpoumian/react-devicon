import React from 'react'
import renderer from 'react-test-renderer'
import WebstormPlainWordmark from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<WebstormPlainWordmark />).toJSON()
  expect(tree).toMatchSnapshot()
})
