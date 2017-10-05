import React from 'react'
import renderer from 'react-test-renderer'
import SymfonyOriginalWordmark from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<SymfonyOriginalWordmark />).toJSON()
  expect(tree).toMatchSnapshot()
})
