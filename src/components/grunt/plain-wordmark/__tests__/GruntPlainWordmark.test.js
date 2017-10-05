import React from 'react'
import renderer from 'react-test-renderer'
import GruntPlainWordmark from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<GruntPlainWordmark />).toJSON()
  expect(tree).toMatchSnapshot()
})
