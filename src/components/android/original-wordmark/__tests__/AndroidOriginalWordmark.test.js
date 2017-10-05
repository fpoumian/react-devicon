import React from 'react'
import renderer from 'react-test-renderer'
import AndroidOriginalWordmark from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<AndroidOriginalWordmark />).toJSON()
  expect(tree).toMatchSnapshot()
})
