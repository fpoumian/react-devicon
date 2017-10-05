import React from 'react'
import renderer from 'react-test-renderer'
import EmberOriginalWordmark from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<EmberOriginalWordmark />).toJSON()
  expect(tree).toMatchSnapshot()
})
