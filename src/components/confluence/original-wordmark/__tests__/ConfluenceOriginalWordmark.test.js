import React from 'react'
import renderer from 'react-test-renderer'
import ConfluenceOriginalWordmark from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<ConfluenceOriginalWordmark />).toJSON()
  expect(tree).toMatchSnapshot()
})
