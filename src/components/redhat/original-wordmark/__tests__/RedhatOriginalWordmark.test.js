import React from 'react'
import renderer from 'react-test-renderer'
import RedhatOriginalWordmark from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<RedhatOriginalWordmark />).toJSON()
  expect(tree).toMatchSnapshot()
})
