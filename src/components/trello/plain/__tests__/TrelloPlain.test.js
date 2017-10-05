import React from 'react'
import renderer from 'react-test-renderer'
import TrelloPlain from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<TrelloPlain />).toJSON()
  expect(tree).toMatchSnapshot()
})
