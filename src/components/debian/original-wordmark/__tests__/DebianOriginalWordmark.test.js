import React from 'react'
import renderer from 'react-test-renderer'
import DebianOriginalWordmark from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<DebianOriginalWordmark />).toJSON()
  expect(tree).toMatchSnapshot()
})
