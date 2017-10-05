import React from 'react'
import renderer from 'react-test-renderer'
import PycharmOriginalWordmark from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<PycharmOriginalWordmark />).toJSON()
  expect(tree).toMatchSnapshot()
})
