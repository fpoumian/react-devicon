import React from 'react'
import renderer from 'react-test-renderer'
import MeteorOriginalWordmark from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<MeteorOriginalWordmark />).toJSON()
  expect(tree).toMatchSnapshot()
})
