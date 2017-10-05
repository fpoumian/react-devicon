import React from 'react'
import renderer from 'react-test-renderer'
import IonicOriginalWordmark from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<IonicOriginalWordmark />).toJSON()
  expect(tree).toMatchSnapshot()
})
