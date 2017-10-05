import React from 'react'
import renderer from 'react-test-renderer'
import FoundationOriginalWordmark from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<FoundationOriginalWordmark />).toJSON()
  expect(tree).toMatchSnapshot()
})
