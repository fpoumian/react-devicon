import React from 'react'
import renderer from 'react-test-renderer'
import GoogleOriginalWordmark from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<GoogleOriginalWordmark />).toJSON()
  expect(tree).toMatchSnapshot()
})
