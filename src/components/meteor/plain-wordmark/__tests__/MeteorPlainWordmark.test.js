import React from 'react'
import renderer from 'react-test-renderer'
import MeteorPlainWordmark from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<MeteorPlainWordmark />).toJSON()
  expect(tree).toMatchSnapshot()
})
