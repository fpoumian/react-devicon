import React from 'react'
import renderer from 'react-test-renderer'
import SourcetreeOriginalWordmark from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<SourcetreeOriginalWordmark />).toJSON()
  expect(tree).toMatchSnapshot()
})
