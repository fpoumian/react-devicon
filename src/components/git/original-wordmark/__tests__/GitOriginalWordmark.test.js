import React from 'react'
import renderer from 'react-test-renderer'
import GitOriginalWordmark from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<GitOriginalWordmark />).toJSON()
  expect(tree).toMatchSnapshot()
})
