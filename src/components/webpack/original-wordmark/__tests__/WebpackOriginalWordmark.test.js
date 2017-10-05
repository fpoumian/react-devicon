import React from 'react'
import renderer from 'react-test-renderer'
import WebpackOriginalWordmark from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<WebpackOriginalWordmark />).toJSON()
  expect(tree).toMatchSnapshot()
})
