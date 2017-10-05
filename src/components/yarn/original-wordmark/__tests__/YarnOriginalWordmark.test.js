import React from 'react'
import renderer from 'react-test-renderer'
import YarnOriginalWordmark from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<YarnOriginalWordmark />).toJSON()
  expect(tree).toMatchSnapshot()
})
