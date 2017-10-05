import React from 'react'
import renderer from 'react-test-renderer'
import AndroidPlainWordmark from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<AndroidPlainWordmark />).toJSON()
  expect(tree).toMatchSnapshot()
})
