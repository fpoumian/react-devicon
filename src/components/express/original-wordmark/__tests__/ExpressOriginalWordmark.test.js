import React from 'react'
import renderer from 'react-test-renderer'
import ExpressOriginalWordmark from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<ExpressOriginalWordmark />).toJSON()
  expect(tree).toMatchSnapshot()
})
