import React from 'react'
import renderer from 'react-test-renderer'
import ReactOriginalWordmark from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<ReactOriginalWordmark />).toJSON()
  expect(tree).toMatchSnapshot()
})
