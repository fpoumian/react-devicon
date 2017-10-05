import React from 'react'
import renderer from 'react-test-renderer'
import YiiOriginalWordmark from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<YiiOriginalWordmark />).toJSON()
  expect(tree).toMatchSnapshot()
})
