import React from 'react'
import renderer from 'react-test-renderer'
import GradlePlainWordmark from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<GradlePlainWordmark />).toJSON()
  expect(tree).toMatchSnapshot()
})
