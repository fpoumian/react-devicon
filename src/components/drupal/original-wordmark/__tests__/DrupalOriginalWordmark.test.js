import React from 'react'
import renderer from 'react-test-renderer'
import DrupalOriginalWordmark from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<DrupalOriginalWordmark />).toJSON()
  expect(tree).toMatchSnapshot()
})
