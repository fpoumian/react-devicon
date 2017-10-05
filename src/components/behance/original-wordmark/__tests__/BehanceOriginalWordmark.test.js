import React from 'react'
import renderer from 'react-test-renderer'
import BehanceOriginalWordmark from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<BehanceOriginalWordmark />).toJSON()
  expect(tree).toMatchSnapshot()
})
