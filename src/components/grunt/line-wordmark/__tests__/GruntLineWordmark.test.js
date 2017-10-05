import React from 'react'
import renderer from 'react-test-renderer'
import GruntLineWordmark from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<GruntLineWordmark />).toJSON()
  expect(tree).toMatchSnapshot()
})
