import React from 'react'
import renderer from 'react-test-renderer'
import HandlebarsOriginalWordmark from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<HandlebarsOriginalWordmark />).toJSON()
  expect(tree).toMatchSnapshot()
})
