import React from 'react'
import renderer from 'react-test-renderer'
import SlackOriginalWordmark from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<SlackOriginalWordmark />).toJSON()
  expect(tree).toMatchSnapshot()
})
