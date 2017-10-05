import React from 'react'
import renderer from 'react-test-renderer'
import LinkedinOriginalWordmark from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<LinkedinOriginalWordmark />).toJSON()
  expect(tree).toMatchSnapshot()
})
