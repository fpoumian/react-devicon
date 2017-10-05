import React from 'react'
import renderer from 'react-test-renderer'
import GruntOriginalWordmark from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<GruntOriginalWordmark />).toJSON()
  expect(tree).toMatchSnapshot()
})
